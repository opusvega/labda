var wait = require("wait.for");
var mysql = require("mysql");
var responseStub = require("./responseStub.js")
var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var fs = require('fs');
var cmd=require('node-cmd');
var config=require('./config.js');
var url = config.mongourl;
//var incid = Math.floor(Math.random()*(1000000000-100)+100);

//mysql connection
function createMysqlConnection(){
    var con = mysql.createConnection({
        host: config.mysqlUrl,
        user: config.mysqlUser,
        password: config.mysqlPassword,
        database : config.mysqldb
    });
    return con;
}

//insert into mysql
function insertMysql(intentRequest){
    var ATMID = intentRequest.intent.slots.atmidslot.value;
    var ISSUE = intentRequest.intent.slots.issuesslot.value;
    var CUSTOMERNAME = intentRequest.intent.slots.customernameslot.value;
    var CONTACT = intentRequest.intent.slots.contactslot.value;
    createMysqlConnection().connect(function(err) {
        if (err) throw err;
        else{
            console.log("Connected!");
            var sql = "INSERT INTO incidentlog (incid, atmid, issue, status,username, usercontact, inctime, restime) VALUES"+
                      " (DEFAULT, "+ATMID+", '"+ISSUE+"','In-progress','"+CUSTOMERNAME+"','"+CONTACT+"',NOW(), NOW());";
            createMysqlConnection().query(sql, function (err, result) {
                    if (err) throw err;
                    else console.log("1 record inserted");
            });
        }
            
    });
}

//
function selectMysql(intentRequest,callback){
    var ATMID = intentRequest.intent.slots.atmidslot.value;
    var USERNAME = intentRequest.intent.slots.customernameslot.value;
    var CONTACT = intentRequest.intent.slots.contactslot.value;
    var query = "SELECT incid FROM incidentlog WHERE atmid = '"+ATMID+"' AND username = '"+USERNAME+"'"+
                " AND usercontact = '"+CONTACT+"'";
    createMysqlConnection().connect(function(err) {
        if (err) throw err;
        else{
            createMysqlConnection().query(query, function (err, rows) {
                if (err) throw err;
                else {
                    console.log(rows);
                    callback(rows[0].incid);
                }
            });   
        }
        
    });
}


//Attribute creation
function createAttribute(value){
	return {
		value,
	}
}

function createConnectionMysql(callback){
    console.log("Entering createConnection---->")
    var con = mysql.createConnection({
        host: '123.108.50.53',
        port: 3306,
        user: 'root',
        password: 'root@123',
        database: 'chatbotdb'
    });
    console.log("createConnection succeeded! ")
    return con;
}



function insertMongo(paramObj){
    console.log("Entering insertMongo---------->");
    //var incid = Math.floor(Math.random()*(1000000000-100)+100).toString();
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log("ERROR Connectingto DB!!!");
        } else {
            console.log("Suucessfully Conencted to Db: ChatBOT!!!");
        }


    //Find all documents whose timestamp is greater than 2017-10-25T12:12:04.607Z and returning usersays response fields
        console.log("Finding all docs");
        //var incid = Math.floor(Math.random()*(1000000000-100)+100);
        var currtime = Date.now();
        console.log("Random incid: " + incid);
        var INCLOGMONGO = {
            incid: incid,
            atmid: paramObj.ATMID,
            issue:paramObj.ISSUES,
            status: 'In-progress',
            username: paramObj.CUSTOMERNAME,
            usercontact: paramObj.CONTACT,
            inctime: currtime,
            restime: ''
        }
        db.collection('incidentlog').insertOne(INCLOGMONGO, function(error,res) {
            if(error) console.log("OOPS..Couldnt find anything...");
            else{
                console.log("1 record inserted");
            }
        });
    });
}


function findMongo(paramObj,callback){
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log("ERROR Connectingto DB!!!");
        }else {
            console.log("Suucessfully Conencted to Db: ChatBOT!!!");
        }


        db.collection('incidentlog').find({},{incid:1,_id:0}).sort({$natural:-1}).limit(1).toArray(function(error,docs) {
            if(error)
                console.log("OOPS..Couldnt find anything...");
            else{
        console.log("Following are the records : ");
        console.log(docs);
        var INCID = docs[0].incid;
        console.log(INCID);
        callback(null,INCID);
      }
        });
    });
}
//report-atm-incident-get-atm-id
function apiHandlerForReportAtmIncidentGetAtmId(intentRequest){
    const intentName = intentRequest.intent.name;
    const cardTitle = intentName;
    let repromptText = '';
    const shouldEndSession = false;
    let outputSpeech = '';
    let resultText = '';
    const paramObj = {};
    paramObj.ATMID = intentRequest.intent.slots.atmidslot.value;
    speechOutput = responseStub.reportAtmIncidentGetAtmId(paramObj);
    
    return buildSpeechletResponseAsSpeechTag(cardTitle, speechOutput, repromptText, shouldEndSession);
}

//report-atm-incident
function apiHandlerForReportAtmIncident(intentRequest){
    console.log("inside apihandler apiHandlerForReportAtmIncident------->")
	//const intent = intentRequest.intent;
    const intentName = intentRequest.intent.name;
    const cardTitle = intentName;

    let repromptText = '';
    //let sessionAttributes = {};
    const shouldEndSession = false;
    let speechOutput = '';
    /*const paramObj = {};
    paramObj.ATMID = intentRequest.intent.slots.atmidslot.value;
    paramObj.CUSTOMERNAME = intentRequest.intent.slots.customernameslot.value;
    paramObj.CONTACT = intentRequest.intent.slots.contactslot.value;
    paramObj.ISSUES = intentRequest.intent.slots.issuesslot.value;
    console.log("before calling insertMysql------>");
    */
    insertMysql(intentRequest);
    var INCID;

    wait.for(selectMysql, intentRequest, function(incid){
        INCID = incid;
        console.log("incid ...: " + INCID);
        speechOutput = responseStub.reportAtmIncident(intentRequest,INCID);
        console.log("Leaving apihandler apiHandlerForReportAtmIncident-------->"+speechOutput);
        return buildSpeechletResponseAsSpeechTag(cardTitle, speechOutput, repromptText, shouldEndSession);
        
    });

    //insertMongo(paramObj);
    //console.log("after calling insertMongo------>");
    //console.log("paramObj--->"+JSON.stringify(paramObj));
    /*function select(paramObj){
        findMongo(paramObj,function(err, incid){
            if (err) console.log(err);
            else{
                console.log("incid=>"+incid);
                paramObj.INCID = incid;  
                console.log("paramObj.INCID------>"+paramObj.INCID);
            }
        });  
    } */

    //wait.launchFiber(select,paramObj);
    
    //console.log("Inside timeout----->")
    //console.log("Before response stub INCID------->"+INCID);
    /*speechOutput = responseStub.reportAtmIncident(paramObj,incid);
    console.log("Leaving apihandler apiHandlerForReportAtmIncident-------->"+speechOutput);
    return buildSpeechletResponseAsSpeechTag(cardTitle, speechOutput, repromptText, shouldEndSession);
    */

}

function selectStatusMysql(intentRequest,callback){
    var INCID = intentRequest.intent.slots.incid.value;
    var query = "SELECT atmid, issue, DATE_FORMAT(inctime, '%a %d %b %Y %T' ) inctime, status FROM incidentlog WHERE incid = "+INCID;
    createMysqlConnection().connect(function(err) {
        if (err) throw err;
        else{
            createMysqlConnection().query(query, function (err, rows) {
                if (err) throw err;
                else {
                    console.log(rows);
                    callback(rows);
                }
            });   
        }
        
    });
}

//track-atm-incident
function apiHandlerForTrackIncident(intentRequest){
    //const intent = intentRequest.intent;
    const intentName = intentRequest.intent.name;
    const cardTitle = intentName;

    let repromptText = '';
    //let sessionAttributes = {};
    const shouldEndSession = false;
    let speechOutput = '';
    let resultText = '';
    let resObject = '';
    const paramObj = {};
    paramObj.INCID = intentRequest.intent.slots.incid.value;
    wait.for(selectStatusMysql, intentRequest, function(rows){
        console.log("got rows from callback---->"+rows);
        speechOutput = responseStub.trackAtmIncident(paramObj);
        console.log("Exiting apiHandlerForTrackIncident ------>");
        return buildSpeechletResponseAsSpeechTag(cardTitle, speechOutput, repromptText, shouldEndSession);  
       
    });
    //speechOutput = responseStub.trackAtmIncident(paramObj);

    //return buildSpeechletResponseAsSpeechTag(cardTitle, speechOutput, repromptText, shouldEndSession);

}

function buildSpeechletResponseAsSpeechTag(title, output, repromptText, shouldEndSession) {
   console.log("{        outputSpeech: {            type: 'SSML',            ssml: '<speak>' + output +'</speak>',        },        card: {            type: 'Simple',            title: `SessionSpeechlet - ${title}`,            content: `SessionSpeechlet - ${output}`,        },        reprompt: {            outputSpeech: {                type: 'PlainText',                text: repromptText,            },        },        shouldEndSession,    }");
    return {
        outputSpeech: {
            type: 'SSML',
            ssml: '<speak>' + output +'</speak>',
        },
        card: {
            type: 'Simple',
            title: `SessionSpeechlet - ${title}`,
            content: `SessionSpeechlet - ${output}`,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText,
            },
        },
        shouldEndSession,
    };
}

function demoReportAtmIncident(intentRequest){

    const intentName = intentRequest.intent.name;
    const cardTitle = intentName;
    let repromptText = '';
    const shouldEndSession = false;
    let outputSpeech = '';
    let resultText = '';
    const paramObj = {};
    //const paramObj = {};
    paramObj.ATMID = intentRequest.intent.slots.atmidslot.value;
    paramObj.CUSTOMERNAME = intentRequest.intent.slots.customernameslot.value;
    paramObj.CONTACT = intentRequest.intent.slots.contactslot.value;
    paramObj.ISSUES = intentRequest.intent.slots.issuesslot.value;
    speechOutput = responseStub.DemoReporAtmIncident(paramObj);
    
    return buildSpeechletResponseAsSpeechTag(cardTitle, speechOutput, repromptText, shouldEndSession);
}

function demoTrackAtmIncident(intentRequest){

    const intentName = intentRequest.intent.name;
    const cardTitle = intentName;
    let repromptText = '';
    const shouldEndSession = false;
    let outputSpeech = '';
    let resultText = '';
    const paramObj = {};
    //const paramObj = {};
    paramObj.INCID = intentRequest.intent.slots.incid.value;
    speechOutput = responseStub.DemoTrackIncident(paramObj);
    
    return buildSpeechletResponseAsSpeechTag(cardTitle, speechOutput, repromptText, shouldEndSession);

}

//exporting all functions
exports.apiHandlerForTrackIncident = apiHandlerForTrackIncident;
exports.apiHandlerForReportAtmIncident = apiHandlerForReportAtmIncident;
exports.apiHandlerForReportAtmIncidentGetAtmId = apiHandlerForReportAtmIncidentGetAtmId;
exports.demoTrackAtmIncident = demoTrackAtmIncident;
exports.demoReportAtmIncident = demoReportAtmIncident;
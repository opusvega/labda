'use strict'

var apihandler = require("./apihandler.js");
var responseStub = require("./responseStub.js");
var wait = require('wait.for');
var conversationHistory = require("./LogHandler.js");

function logConversation(){
    console.log("Entering logConversation--->");
    var historyLogger = {
            usersays : "Hi text from lambda",
            response : "I'm so happie",
            intent : "welcome",
            timestamp : "timestampValue"
        }
    conversationHistory.MongoInsert(historyLogger);
    console.log("Exiting logConversation--->");
}

//welcome response
function getWelcomeResponse(callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Welcome';
    const speechOutput = 'Thank you for calling NCR corporation.' +
    ' My name is Vega. How can I help you today? You can say Report an ATM issue or Check status of an ATM incident';
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Please tell me how I can help you, you could say Report an ATM issue or Check status of an ATM incident';
    const shouldEndSession = false;
    logConversation();
    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));

}

//all small talk handle
function smalltalkRequestHandler(intentRequest, session, callback){
    console.log("Inside primary smalltalkRequestHandler--->");
    console.log("IntentRequest----->"+JSON.stringify(intentRequest));
    var sessionAttributes = {};
    var intentName = intentRequest.intent.name;
    const cardTitle = intentName;
    const speechOutput = responseStub.smallTalk(intentName);
    const repromptText = "Hey you are there?"
    const shouldEndSession = false;
    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function reportAtmIncidentGetAtmIdRequestHandler(intentRequest, session, callback){
  console.log("Inside reportAtmIncidentGetAtmIdRequestHandler-------->");
  var sessionAttributes = {};
  var filledSlots = delegateSlotCollection(intentRequest, sessionAttributes, callback);
  console.log("filledSlots--->"+JSON.stringify(filledSlots));
  if(filledSlots.slots.atmidslot.value != "" ||
      filledSlots.slots.atmidslot.value != "?"){
      console.log("Inside atmidslot---->");
      let sessionAttributes = {};
      var returnJsonObj = {};
      if(isSlotValid(intentRequest, "atmidslot")){
        returnJsonObj = apihandler.apiHandlerForReportAtmIncidentGetAtmId(intentRequest);
       callback(sessionAttributes, returnJsonObj);
      }
  else{
      fallbackResponse();
    }
  }
  else
    {
      var speechOutput = "";
      //activity is optional so we'll add it to the output
      //only when we have a valid activity
      //Now let's recap the trip
      speechOutput = "There is some technical issue. Please try again or call NCR helpdesk number 1-800-325-6000";
      //say the results
      callback(sessionAttributes,
      buildSpeechletResponse("Feeestimate", speechOutput, "", true));
    }

}

//report-atm-incident
function reportAtmIncidentRequestHandler(intentRequest, session, callback){
    console.log("Inside reportAtmIncidentRequestHandler functions");
    console.log("intentRequest: "+ JSON.stringify(intentRequest));
    var sessionAttributes={};
    var filledSlots = delegateSlotCollection(intentRequest, sessionAttributes, callback);
    console.log("filledSlots:-" + JSON.stringify(filledSlots));

    //compose speechOutput that simply reads all the collected slot values
    if(filledSlots.slots.atmidslot.value != "" && 
      filledSlots.slots.customernameslot.value != "" && 
      filledSlots.slots.contactslot.value != "" && 
      filledSlots.slots.issuesslot.value != "" &&
      filledSlots.slots.atmidslot.value != "?" && 
      filledSlots.slots.customernameslot.value != "?" && 
      filledSlots.slots.contactslot.value != "?" && 
      filledSlots.slots.issuesslot.value != "?")
    {
        let sessionAttributes = {};
        sessionAttributes = '';
        var returnJsonObj = {};     
        if( isSlotValid(intentRequest,"atmidslot") && isSlotValid(intentRequest,"customernameslot") &&
        isSlotValid(intentRequest,"contactslot") && isSlotValid(intentRequest,"issuesslot") )
        {
           returnJsonObj = apihandler.demoReportAtmIncident(intentRequest);
           console.log("reportAtmIncidentRequestHandler before callback-->"+JSON.stringify(returnJsonObj));
           callback(sessionAttributes,returnJsonObj);
        }
        else{ 
            fallbackResponse();
        }
    }
    else
    {
      var speechOutput = "";
      speechOutput = "There is some technical issue. Please try again or call WU helpdesk number 1-800-325-6000";
      
      callback(sessionAttributes, buildSpeechletResponse("reportAtmIncidentGetAtmId", speechOutput, "", true));
    }
}

//track-atm-incident
function trackAtmIncidentRequestHandler(intentRequest, session, callback) {
    console.log("Inside trackAtmIncidentRequestHandler functions--------->");
    console.log("intentRequest: ------>"+ JSON.stringify(intentRequest));
    var sessionAttributes={};
    var filledSlots = delegateSlotCollection(intentRequest, sessionAttributes, callback);
    console.log("filledSlots:------>" + JSON.stringify(filledSlots));

    //compose speechOutput that simply reads all the collected slot values
    if(filledSlots.slots.incid.value != "" && 
      filledSlots.slots.incid.value != "?")
    {
        console.log("Inside trackAtmIncidentRequestHandler functions");
        let sessionAttributes = {};
        var returnJsonObj = {};     
        //POST Request to WU Webservice

        if( isSlotValid(intentRequest,"incid"))
        {
           returnJsonObj = apihandler.demoTrackAtmIncident(intentRequest);
          callback(sessionAttributes,returnJsonObj);
        }
        else{ 
            fallbackResponse();
        }
    }
    else
    {
      var speechOutput = "";
      //activity is optional so we'll add it to the output
      //only when we have a valid activity
      //Now let's recap the trip
      speechOutput = "There is some technical issue. Please try again or call NCR helpdesk number 1-800-325-6000";
      //say the results
      callback(sessionAttributes,
      buildSpeechletResponse("Feeestimate", speechOutput, "", true));
    }

}

//Attribute creation
function createAttribute(value){
    return {
        value,
    }
}

//slot primary validation
function isSlotValid(request, slotName){
        var slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return true;
        }
        return false;
}

//slot primary validation
function isSlotValid1(request, slotName){
        var slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}

//delegete utility function
function delegateSlotCollection(intentRequest, sessionAttributes, callback){

  console.log("in delegateSlotCollection---->");
  console.log("current dialogState: ---->"+JSON.stringify(intentRequest.dialogState));

    if (intentRequest.dialogState === "STARTED") {
      console.log("  STARTED request: ------>"+JSON.stringify(intentRequest));
      var updatedIntent=intentRequest.intent;
      callback(sessionAttributes,
          buildSpeechletResponseWithDirectiveNoIntent());
    } else if (intentRequest.dialogState !== "COMPLETED") {

      console.log("IN PROGRESS request: ----->"+JSON.stringify(intentRequest));

      callback(sessionAttributes,buildSpeechletResponseWithDirectiveNoIntent());
      //callback(sessionAttributes,test());

    } else {
      console.log("  COMPLETED current request: ------>"+JSON.stringify(intentRequest));
      return intentRequest.intent;
    }
}

function buildSpeechletResponseWithDirectiveNoIntent() {
    console.log("in buildSpeechletResponseWithDirectiveNoIntent");
    return {
      "outputSpeech" : null,
      "card" : null,
      "directives" : [ {
        "type" : "Dialog.Delegate",
        "updatedIntent": null
      } ],
      "reprompt" : null,
      "shouldEndSession" : false
    }
  }

//Building speech response
function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: 'PlainText',
            text: output,
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


/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log(`onSessionStarted requestId=${sessionStartedRequest.requestId}, sessionId=${session.sessionId}`);
}

/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(request, session, callback) {
    //console.log(`onLaunch requestId=${launchRequest.requestId}, sessionId=${session.sessionId}`);
    console.log("In launchRequest----->");
    console.log("  request --------> "+JSON.stringify(request));
    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    //console.log(`onIntent requestId=${intentRequest.requestId}, sessionId=${session.sessionId}`);
    console.log("in onIntent----->");
    const intent = intentRequest.intent;
    const intentName = intentRequest.intent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'AMAZON.HelpIntent' || intentName === 'DefaultWelcomeIntent') {
        getWelcomeResponse(callback);
    }else if (intentName === 'ReportAtmIncident_GetAtmId') {
        wait.launchFiber(reportAtmIncidentGetAtmIdRequestHandler,intentRequest, session, callback);
    } else if (intentName === 'ReportAtmIncident') {
        wait.launchFiber(reportAtmIncidentRequestHandler,intentRequest, session, callback);
    } else if (intentName === 'TrackAtmIncident') {
         wait.launchFiber(trackAtmIncidentRequestHandler,intentRequest, session, callback);
    }else if (intentName === 'AMAZON.StopIntent' || intentName === 'AMAZON.CancelIntent') {
        handleSessionEndRequest(callback);
    } else if(intentName.includes("Smalltalk")){
        wait.launchFiber(smalltalkRequestHandler, intentRequest, session, callback);
    }
    else {
        throw new Error('Invalid intent');
    }
}

function buildResponse(sessionAttributes, speechletResponse) {
    console.log("Responding with " + JSON.stringify(speechletResponse));
    return {
        version: '1.0',
        sessionAttributes,
        response: speechletResponse,
    };
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function handleSessionEndRequest(callback) {
    const cardTitle = 'Session Ended';
    const speechOutput = 'Thank you for calling NCR corporation. Have a nice day!';
    // Setting this to true ends the session and exits the skill.
    const shouldEndSession = true;
    callback({}, buildSpeechletResponse(cardTitle, speechOutput, null, shouldEndSession));
}

function onSessionEnded(sessionEndedRequest, session) {
    console.log(`onSessionEnded requestId=${sessionEndedRequest.requestId}, sessionId=${session.sessionId}`);
    // Add cleanup logic here
}


// --------------- Main handler -----------------------

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = (event, context, callback) => {
    try {
  
        console.log("EVENT>>>>>" + JSON.stringify(event));
        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === 'LaunchRequest') {
            onLaunch(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'IntentRequest') {
            onIntent(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'SessionEndedRequest') {          
            onSessionEnded(event.request, event.session);
            callback();
        }
    } catch (err) {
        callback(err);
    }
};
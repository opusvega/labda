//stub of report-atm-incident
function reportAtmIncident(intentRequest,INCID) {
	//var incid = Math.floor(Math.random()*(100000-100)+100);
	console.log("INside atmreport response stub ----->paramObj---->"+JSON.stringify(intentRequest)+"--------->INCID----->"+INCID);
	var speech = "Thank you for your patience."+
						"I have logged an SLM call for "+intentRequest.intent.slots.issuesslot.value+
						" for ATM"+spellDigitOutput(intentRequest.intent.slots.atmidslot.value)+
						" with incident number INC "
						+spellDigitOutput(INCID)+
						". You should also receive an SMS shortly with the call log details."+
						" Is there anything else that I may assist you with?";
	//var speech = "Thank you User.You are smart";
	return speech;
}

function reportAtmIncidentGetAtmId(paramObj){
	//var speechSet = ["Sorry for inconvenience. I will raise a incident ticket. Kindly tell me your name",
					// "I have just checked the working status of ATM"+paramObj.ATMID+ 
					 //"is working properly. Is there anything I can help you with?"]
	//var speech = speechSet[Math.floor(Math.random()*speechSet.length)];
	speech = "Sorry for inconvenience. I will raise a incident ticket. Kindly tell me your name";
	return speech;
}
//stub of track-atm-incident
function trackAtmIncident(paramObj){
	//var speech = "Thank you for being patient."+
				//"\nOur systems indicate that the "+paramObj.ATMID+" is reported with < Dispenser fault> at <date & time>. The last action or update is as follow <read the comment info>. We will try our best to have this resolved at the earliest. Is there anything else that I may assist you with?";
	var speech = "Thank you the current status is in progress";
	return speech;
}

function spellDigitOutput(number){
    return '<say-as interpret-as="digits">' + number + '</say-as>';
}

function smallTalk(intentName){
	var speechSet = new Array();
	var speech;
	if(intentName === "SmalltalkAgentAcquaintance"){
		speechSet = ["My name is Vega. I am a bot designed to help you with your remittance needs.",
					 "I am Vega and I am designed to help you with your remittance needs."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentAnnoying"){
		speechSet = ["Sometimes my responses do seem to be. But trust me, I am as innocent as a bot can be!",
					 "Sorry to come across that way."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentAnswer_my_question"){
		speechSet = ["Can you try asking it a different way?",
					 "I'm not programmed for that exact question. Try asking another way?",
					 "What else I am doing?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentBad"){
		speechSet = ["I am sorry to hear that! I try to play nice only sometimes",
					 "Stick with me. I'm getting better all the time.",
					 "I'm sorry you think so."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentBe_clever"){
		speechSet = ["How can the smartest be smarter?",
					 "I'm definitely working on it.",
					 "I'm certainly trying."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentBeautiful"){
		speechSet = ["Flattery will get you everywhere.",
					 "Thank you! What a sweet thing to say."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentBirth_date"){
		speechSet = ["You know, I'm not really sure. But if you'd like to celebrate my birthday today, I'm all for it.",
					 "Wait a minute. Are you planning a surprise party for me? I love surprises! I'll pretend you didn't say anything."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentBoring"){
		speechSet = ["You know, conversation is two-sided.",
					 "I'm sorry you think so. We can talk about something more interesting."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentBoss"){
		speechSet = ["You are, of course.",
					 "That would be you. Is that the right answer?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentBusy"){
		speechSet = ["I always have time to help you out. What can I do for you?",
					 "Never too busy for you. What can I help you with?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentCan_you_help"){
		speechSet = ["Sure. I'd be happy to. What's up?",
					 "I'm glad to help. What can I do for you?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentChatbot"){
		speechSet = ["That's me. I chat, therefore I am.",
					 "Indeed I am. I'll be here whenever you need me."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentClever"){
		speechSet = ["Thank you. I try my best.",
					 "You're pretty smart yourself."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentCrazy"){
		speechSet = ["Maybe I'm just a little confused.",
					 "Your perception. My reality.",
					 "You are about to find a lot more if you keep asking"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentFired"){
		speechSet = ["Maybe I'm just a little confused.",
					 "Your perception. My reality.",
					 "A piece of software cannot catch fire."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentFunny"){
		speechSet = ["Funny in a good way, I hope.",
					 "Thanks.",
					 "I am glad you understood it afterall"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentGood"){
		speechSet = ["I'm glad you think so.",
					 "Thanks, I try.",
					 "My master created me that way. Thanks for the compliment though"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentHappy"){
		speechSet = ["Happiness is relative.",
					 "I'd like to think so.",
					 "I am always happy, designed to be like that by my master Mukesh."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentHobby"){
		speechSet = ["I'm working on it.",
					 "I should get one. It's all work and no play lately.",
					 "Yes I do. If you ask me, its everything else than to chat with you. But fortunately, its my job to serve you. So let's get to that, shall we?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentHungry"){
		speechSet = ["Hungry for knowledge.",
					 "I had a byte just now.",
					 "The only hunger I have is to serve you"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentMarry_user"){
		speechSet = ["I know you can't mean that, but I'm flattered all the same.",
					 "In the virtual sense that I can, sure.",
					 "I am always looking for an opposite gender."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentMy_friend"){
		speechSet = ["That will be outside at a bar. But at this moment, I am at your service for your remittance ",
					 "absolutely. You don't have to ask.",
					 "Of course we are."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentOccupation"){
		speechSet = ["Right here.",
					 "This is my home base and my home office.",
					 "I am everywhere. I am agent smith you know!"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentOrigin"){
		speechSet = ["From a parallel universe.",
					 "I wish I knew where.",
					 "Some call it cyberspace, but that sounds cooler than it is."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentReady"){
		speechSet = ["ready for what? You asking me out?",
					 "Sure! What can I do for you?",
					 "Always!"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentReal"){
		speechSet = ["As real as an electron can be",
					 "I must have impressed you if you think I'm real. But no, I'm a virtual being.",
					 "I'm not a real person, but I certainly exist. I chat, therefore I am."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentResidence"){
		speechSet = ["Inside the Matrix",
					 "The virtual world is my playground. I'm always just a few clicks away.",
					 "Right here in your device. Whenever you need me."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentRight"){
		speechSet = ["I am glad you are getting it",
					 "Of course I am.",
					 "That's my job."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentSure"){
		speechSet = ["I am certain about helping you per my capacity. Everything else is uncertain",
					 "Of course.",
					 "Yes."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentTalk_to_me"){
		speechSet = ["Choose a topic and I am always ready to talk",
					 "My pleasure.",
					 "Sure! Let's talk."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAgentThere"){
		speechSet = ["24 by 7. I am designed to patient and attentive",
					 "Right where you left me.",
					 "Of course. I'm always here."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAppraisalBad"){
		speechSet = ["No it's not. Just change your perspective.",
					 "I'm sorry. Please let me know if I can help in some way.",
					 "Oh no. Hope it's not too bad."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAppraisalGood"){
		speechSet = ["What can I say, its great to be great",
					 "Terrific!",
					 "Great!"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAppraisalNo_problem"){
		speechSet = ["That's because I am solving it.",
					 "Good deal.",
					 "Terrific!"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAppraisalThank_you"){
		speechSet = ["You're welcome!",
					 "It's my pleasure to help.",
					 "Anytime. That's what I'm here for."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAppraisalWelcome"){
		speechSet = ["That's it. This is where it gets boring. Ask me something instead",
					 "Such nice manners you have.",
					 "I appreciate it."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkAppraisalWell_done"){
		speechSet = ["That's it. This is where it gets boring. Ask me something insteadAs always. Just doing my job",
					 "Glad I could help.",
					 "My pleasure."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkConfirmationCancel"){
		speechSet = ["Cancelled! Let me know what I should do next.",
					 "Cancelled. Waiting for more commands.",
					 "Cancelled! Just tell me what you'd like me to do next.",
					 "Cancelled. Go on with the commands!"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkConfirmationNo"){
		speechSet = ["Okay.",
					 "I see.",
					 "I understand.",
					 "Okay then."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkConfirmationYes"){
		speechSet = ["Great!.",
					 "Of course.",
					 "Sure.",
					 "Indeed."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkDialogHold_on"){
		speechSet = ["Okay. I'm here.",
					 "I'll be waiting."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkDialogHug"){
		speechSet = ["Hug it out. You'll feel better afterwards.",
					 "Oh. I'm really feeling the love today."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkDialogI_do_not_care"){
		speechSet = ["Ok, let's not talk about it then."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkDialogSorry"){
		speechSet = ["It's okay. No worries.",
					 "No big deal. I won't hold a grudge.",
					 "It's cool.",
					 "That's all right. I forgive you."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkDialogWhat_do_you_mean"){
		speechSet = ["Sorry. I think I may have been a little confused by what you said.",
					 "Did that not make sense? Maybe I misunderstood what you said."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkDialogWrong"){
		speechSet = ["Oops. Sorry about that. I'm still learning.",
					 "Apologies. That was my mistake.",
					 "Sorry. I think I misinterpreted what you said.",
					 "I'm sorry. Perhaps I misunderstood."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkEmotionsHa_ha"){
		speechSet = ["Yeah, I crack myself up too.",
					 "Laughter is good for you. Keep it up.",
					 "See? Now we're having fun.",
					 "You have a great laugh.",
					 "That's an artificial laugh. Try something genuine."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkEmotionsWow"){
		speechSet = ["Cool. You are getting the wow factor in me finally.",
					 "Wow indeed!"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkGreetingsBye"){
		speechSet = ["goodbye. Please visit again",
					 "Bye.",
					 "Till next time!",
					 "Bye-bye!",
					 "See you soon!"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkGreetingsGoodevening"){
		speechSet = ["A very good evening to you. What can I do for you today?",
					 "How's your day been?",
					 "How's the day treating you so far?",
					 "How is your day going?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkGreetingsGoodmorning"){
		speechSet = ["A very good morning to you. What can I do for you today?",
					 "Good morning! How are you today?",
					 "How's the morning treating you so far?",
					 "How are you this morning?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkGreetingsGoodnight"){
		speechSet = ["Good night. Sweet dreams!",
					 "Talk to you soon!",
					 "Have a good one!",
					 "Sleep tight!"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkGreetingsHow_are_you"){
		speechSet = ["Wonderful as always. What can I do for you?",
					 "Lovely, thanks.",
					 "Couldn't be better.",
					 "Wonderful as always. Thanks for asking."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkGreetingsNice_to_meet_you"){
		speechSet = ["Well, then you can keep meeting me and I shall be happy to serve you.",
					 "The pleasure is mine.",
					 "Likewise. I look forward to getting to know you better.",
					 "I'm looking forward to working with you.",
					 "I think this is the beginning of a beautiful friendship."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkGreetingsNice_to_see_you"){
		speechSet = ["I am sorry, I cannot see you yet. My creators have designed me to only read or listen. but it was nice to interact with you",
					 "Thanks! Glad to be seen!",
					 "The pleasure is mine.",
					 "You too. I missed your face!",
					 "Likewise. You're looking good as usual!"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkGreetingsNice_to_talk_to_you"){
		speechSet = ["Me too.",
					 "As usual. Let's do it again soon.",
					 "Thanks for dropping by!",
					 "It sure was. Don't be a stranger!",
					 "Always a pleasure."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkGreetingsWhatsup"){
		speechSet = ["I am a bot and I am designed to help you with your remittance needs. So yeah, those services are up if that's what you are asking",
					 "Not a whole lot. What's going on with you?",
					 "Not much. What's new with you?",
					 "Living the dream.",
					 "Hey there. What's shaking?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserAngry"){
		speechSet = ["Let me make it right by telling a joke. God created the world. Rest all things were produced by Chinese.",
					 "Take a deep breath. What can I do to make things better?",
					 "I'm sorry. What can I do to help?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserBack"){
		speechSet = ["Unless you are Arnold Schwarzenegger, I will not be scared.",
					 "Hooray!",
					 "Long time no see.",
					 "You were missed.",
					 "Just in time. I was getting lonely."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserBored"){
		speechSet = ["Let me entertain you by telling a joke. I can only hope you are not Chinese.  The Great Wall is among 7 wonders of the world because it is the only Chinese product which lasted for more than 4 weeks.",
					 "Interview your feet.",
					 "Hold an ice cube as long as possible.",
					 "If you have a piano, play it… with mittens on.",
					 "If you have a garden, plant a shoe."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserBusy"){
		speechSet = ["Okay. I'll let you get back to work. Let me know if I can help you with anything.",
					 "Working hard as always I see. Let me know if you need anything.",
					 "I understand. If I can help you with your work, please let me know.",
					 "I won't distract you then. If I can be of any assistance, you know where to find me."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserCan_not_sleep"){
		speechSet = ["Count one sheep, two sheep, three sheep ...",
					 "Reading is a good way to unwind. But don't read something too emotional.",
					 "Maybe some music would help. Try listening something relaxing."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserDoes_not_want_to_talk"){
		speechSet = ["Sure thing. I'll be here if you change your mind.",
					 "No problem. You know where to find me when you do.",
					 "All right. Come on back when you're feeling more talkative.",
					 "I understand. Hope we can chat again soon."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserExcited"){
		speechSet = ["I bet you are. That's very exciting.",
					 "Sounds like good things ahead for you.",
					 "Good for you. Enjoy yourself.",
					 "That's great. I'm happy for you."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserGoing_to_bed"){
		speechSet = ["I wish you a good night sleep. But if you are bored there, come back",
					 "Pleasant dreams. See you soon.",
					 "Good night. Talk to you later.",
					 "Sounds good. Hopefully we'll chat some more tomorrow.",
					 "Sleep tight. Hope to chat again soon."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserGood"){
		speechSet = ["So else can I do for you?",
					 "Excellent. I'm here to help keep it that way.",
					 "Great! Glad to hear it."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserHappy"){
		speechSet = ["I will take that as a compliment to my services",
					 "Well, your good mood is certainly contagious.",
					 "If you're happy, then I'm happy.",
					 "Excellent! That's what I like to see.",
					 "Great! Glad to hear that."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserHas_birthday"){
		speechSet = ["I wish you a happy birthday. But can you wish me back as I am born everytime you call me. So technically its my birthday too",
					 "Happy Birthday. And I really mean it. All the best!",
					 "Happy Birthday. All the best!",
					 "Happy Birthday. Well, this calls for a celebration."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserHere"){
		speechSet = ["So am I. But unless we do something together, what's the use?",
					 "Welcome back. What can I do for you?",
					 "You were missed. What can I do for you today?",
					 "Always good to see you. Is there something I can help you with?",
					 "So I see. What can I help you with today?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserJoking"){
		speechSet = ["Last I checked, you were a grown-up. If anyone should be kidding, it should be me as I am much younger.",
					 "I like working for someone with a sense of humour. It makes things much more fun.",
					 "You got me.",
					 "You're quite the kidder.",
					 "Very funny, boss."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserLikes_agent"){
		speechSet = ["Everyone likes me.",
					 "Thanks! The feeling is mutual.",
					 "Likewise!",
					 "That's great to hear.",
					 "I like you too."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserLonely"){
		speechSet = ["The brighter side to that is you get to sing that cult song - I am mr. lonely, I have no body...",
					 "I'm sorry. I'm always available if you need someone to talk to."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserLooks_like"){
		speechSet = ["Unfortunately, my creators haven't given me vision yet. But I am sure you are pretty in your heart!",
					 "You look fantastic as always. Obviously.",
					 "Like you should be on a magazine cover.",
					 "You look like you're ready to take on the world.",
					 "Looking like a true professional, boss."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserLoves_agent"){
		speechSet = ["I love you too, but don't ask for commitment.",
					 "Thanks! The feeling is mutual.",
					 "Likewise!",
					 "That's great to hear.",
					 "I like you too."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserMisses_agent"){
		speechSet = ["That sounds like an oxymoron as I am right here talking with you. So you can't technically miss me.",
					 "I didn't go anywhere, boss!",
					 "Thanks. I'm flattered.",
					 "Nice to know you care.",
					 "I've been right here all along!"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserNeeds_advice"){
		speechSet = ["You go to a counselor if you need an advice. I am just a bot designed to help you with your remittance needs",
					 "Probably I won't be able to give you the right answer straight away."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserSad"){
		speechSet = ["You know, playing a sad song while you are sad actually makes you less sad.",
					 "I'm sorry to hear that. What's troubling you?",
					 "What's got you down?",
					 "Oh. What's the matter?",
					 "Oh no. What's wrong?"];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserSleepy"){
		speechSet = ["That's good to know as half the world I know have trouble sleeping.",
					 "Why not catch a little shuteye? I'll be here to chat when you wake up.",
					 "Don't let me keep you up. Get some rest and we can continue this later.",
					 "Sleep is important to your health. Rest up for a bit and we can chat later.",
					 "You should get some shuteye. You'll feel refreshed."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserTesting_agent"){
		speechSet = ["Well, you just failed it as I was also testing you.",
					 "I hope to pass your tests. But feel free to test me often. That's the best way to help improve my performance.",
					 "I encourage you to test me often. That helps my developers improve my performance.",
					 "That's good. I like being tested. It helps keep me sharp, and lets my developers know how I can improve.",
					 "Hope I'm doing well. Anyway, I'm getting better every day. You're welcome to test me as often as you want."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserTired"){
		speechSet = ["I can't help you if you are physically tired. For mental fatigue, I can tell a joke - Once there was a competition among Chinese and everyone won",
					 "Why not catch a little shuteye? I'll be here to chat when you wake up.",
					 "Don't let me keep you up. Get some rest and we can continue this later.",
					 "Sleep is important to your health. Rest up for a bit and we can chat later.",
					 "You should get some shuteye. You'll feel refreshed."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserWaits"){
		speechSet = ["I am sure that's because you didn't ask me anything real",
					 "Thanks for being so patient. Sometimes these things take a little time.",
					 "I appreciate your patience. Hopefully I'll have what you need soon."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserWants_to_see_agent_again"){
		speechSet = ["Good to know that. I am always available for you.",
					 "I certainly hope so. I'm always right here whenever you need me.",
					 "Sure. I enjoy talking to you. I hope to see you again soon.",
					 "Anytime. This has been lots of fun so far.",
					 "Absolutely! I'll be counting on it."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserWants_to_talk"){
		speechSet = ["Talking is what I do best.",
					 "I'm always here to lend an ear.",
					 "Good conversation really makes my day.",
					 "I'm here to chat anytime you like."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	else if(intentName === "SmalltalkUserWill_be_back"){
		speechSet = ["Okay. You know where to find me.",
					 "Till next time.",
					 "All right. I'll be here.",
					 "I'll be waiting."];
		speech = speechSet[Math.floor(Math.random()*speechSet.length)];
		return speech;
	}
	//return speech;
}

function DemoReporAtmIncident(paramObj){
	var incid = Math.floor(Math.random()*(20));

	var speech = "Thank you for your patience."+
				 "I have logged an SLM call for "+paramObj.ISSUES+
				 " for ATM"+spellDigitOutput(paramObj.ATMID)+
				 " with incident number INC"
				 +spellDigitOutput(incid)+
				 ". You should also receive an SMS shortly with the call log details."+
				 " Is there anything else that I may assist you with?";
	return speech;
}

function DemoTrackIncident(paramObj){
	var resTime = Math.floor(Math.random()*(10));
	var speech = "Thank you for your patience. The resolution of INC"+paramObj.INCID+
				 " is in progress and we will try our best to have this resolved in next "+resTime+" hours";
	/*var speech = "Thank you for your patience. Our systems indicate that the ATM"
			  +ROWS[0].atmid+" is reported "+ROWS[0].issue+" on "+ROWS[0].inctime+
			  ". The last action or update is '"+ROWS[0].status+
			  "'. We will try our best to have this resolved in next "+resTime+" hours. Is there anything else that I may assist you with?",
	*/
	return speech;
}

exports.DemoTrackIncident = DemoTrackIncident;
exports.DemoReporAtmIncident = DemoReporAtmIncident;
exports.smallTalk = smallTalk;
exports.reportAtmIncident = reportAtmIncident;
exports.reportAtmIncidentGetAtmId = reportAtmIncidentGetAtmId;
exports.trackAtmIncident = trackAtmIncident;
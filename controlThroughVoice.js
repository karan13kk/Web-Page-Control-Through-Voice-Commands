var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var scrolling = false;
var scrollDelay;
var nextval = -1;
var a;
var count = 0;
var refVar;
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);




testSpeech();
// Main Speech function 

function testSpeech() {
			  var recognition = new SpeechRecognition();
			  var speechRecognitionList = new SpeechGrammarList();
			  recognition.lang = 'en-US';
			  recognition.interimResults = false;
			  recognition.maxAlternatives = 1;

			  recognition.start();

			  recognition.onresult = function(event) {
			   
			    speechResult = event.results[0][0].transcript;
			    var str = speechResult;
			    var check = str.search("search");
			    var check2 = str.search("click");
			    var check3 = str.search("next");
			    var check4 = str.search("back");
			    var check5 = str.search("ok");
			    var check6 = str.search("Ok Google");
			    var check7 = str.search("find");
			    var check8 = str.search("direction");
			    if(check>=0)
			    {
			    	$('input').val(speechResult);
			    	searchmainfn();
			    }
			    else if(check2>=0)
			    	{
			    	$('input').val(speechResult);
			    	openlinkmain();
			    }
			    else if(check3>=0)
			    {
			    	$('input').val(speechResult);
			    	next();
			    }
			    else if(check4>=0)
			    {
			    	$('input').val(speechResult);
			    	back();
			    }
			    else if(check5>=0)
			    {
			    	youtubeSearch();
			    }
			    else if(check6>=0)
			    {
			    	googleSearch();
			    }
			    else if(check7>=0)
			    {
			    	mapSearch();
			    }
			     else if(check8>=0)
			    {
			    	mapDirection();
			    }
			    else if(speechResult !== "cool" || speechResult !== "scroll up" || speechResult !== "scroll down")
			    {
			    	$('input').val(speechResult);
			    	console.log(speechResult);
			    	testSpeech();
			    }
			    else
			    $('input').val(speechResult);
			    console.log(speechResult);
			    newfn();

			    console.log('Confidence: ' + event.results[0][0].confidence);
			  }

			  recognition.onspeechend = function() {
			    recognition.stop();
			 
			  }

			  recognition.onerror = function(event) {
			  		testSpeech();
			  }

			}



// Main Search Function

function searchmainfn() 
			{
			  var recognition = new SpeechRecognition();
			  var speechRecognitionList = new SpeechGrammarList();
			  recognition.lang = 'en-US';
			  recognition.interimResults = false;
			  recognition.maxAlternatives = 1;
			  recognition.start();

			  recognition.onresult = function(event)
			  {  
			    	speechResult = event.results[0][0].transcript;
			    	var str = speechResult;
			    	$('input').val(speechResult);
			    	console.log(speechResult);
			    	searchfn();
			    	console.log(speechResult);
					console.log('Confidence: ' + event.results[0][0].confidence);
			  }

			  recognition.onspeechend = function() 
			  	{
			    	recognition.stop();
			  	}

			  recognition.onerror = function(event) 
			  	{
			  		testSpeech();
			  	}

			}



// Main Open Link function

function openlinkmain() 
			{
			  var recognition = new SpeechRecognition();
			  var speechRecognitionList = new SpeechGrammarList();
			  recognition.lang = 'en-US';
			  recognition.interimResults = false;
			  recognition.maxAlternatives = 1;

			  recognition.start();

			  recognition.onresult = function(event)
			  {  
			    	speechResult = event.results[0][0].transcript;
			    	var str = speechResult;
			    	console.log(speechResult);
			    	$('input').val(speechResult);
			    	openlinkfn();
			    	console.log(speechResult);
					console.log('Confidence: ' + event.results[0][0].confidence);
			  }

			  recognition.onspeechend = function() 
			  	{
			    	recognition.stop();
			  	}

			  recognition.onerror = function(event) 
			  	{
			  		testSpeech();
			  	}

			}


// Funtion after Direction Function is executed....To add another value in input

function addNextInput()
{
	var recognition = new SpeechRecognition();
			  var speechRecognitionList = new SpeechGrammarList();
			  recognition.lang = 'en-US';
			  recognition.interimResults = false;
			  recognition.maxAlternatives = 1;

			  recognition.start();

			  recognition.onresult = function(event)
			    {  
			    	speechResult = event.results[0][0].transcript;
			    	var str = speechResult;
			    	console.log(speechResult);
			    	var directionValue = $('#sb_ifc51 >:input');
			    	directionValue.val(speechResult);
			    	searchDirection();
			    	console.log(speechResult);
			    	console.log("tosearchdirection");
					console.log('Confidence: ' + event.results[0][0].confidence);
			    }

			  recognition.onspeechend = function() 
			  	{
			    	recognition.stop();
			  	}

			  recognition.onerror = function(event) 
			  	{
			  		addNextInput();
			  	}

}

//Send

function searchDirection()
{

	var recognition = new SpeechRecognition();
			  var speechRecognitionList = new SpeechGrammarList();
			  recognition.lang = 'en-US';
			  recognition.interimResults = false;
			  recognition.maxAlternatives = 1;

			  recognition.start();

			  recognition.onresult = function(event)
			    {  
			    	speechResult = event.results[0][0].transcript;
			    	var str = speechResult;
			    	console.log(speechResult);
			    	if(speechResult == "search")
			    	{
			    		$("#sb_ifc51 >:button").click();
					    testSpeech();
			    	}
			    	else
			    		addNextInput();
			    	console.log(speechResult);
					console.log('Confidence: ' + event.results[0][0].confidence);
			    }

			  recognition.onspeechend = function() 
			  	{
			    	recognition.stop();
			  	}

			  recognition.onerror = function(event) 
			  	{
			  		testSpeech();
			  	}
}

// Check Whether to Scroll Up or Down or Stop

function newfn()
		{

			if(speechResult === "scroll down") 
			{
			     console.log(speechResult);
			     scrollClickDown();
			} 
			else if(speechResult === "scroll up")
			{
					scrollClickUp();
			}
			else if(speechResult === "cool")
			{
			     scrollClick();

			} 
		}

// Change the current state of (Scroll Up, Down, Stop Function)

		function scrollClickUp() {
			if (!scrolling) {
				testSpeech();
		    scrolling = true;
		  	startScrollUp();
		  }
		}

		function scrollClick() {
			if (scrolling) {
		  	testSpeech();
		    scrolling = false;
		  	stopScroll();
		  }
		}

		function scrollClickDown() {
			if (!scrolling) {
				testSpeech();
		    scrolling = true;
		  	startScrollDown();
		  } 
		}


// Scroll Up, Down, Stop Function


		function startScrollUp() {
			window.scrollBy(0, -50); // horizontal and vertical scroll increments
		  scrolldelay = setTimeout('startScrollUp()', 200); // scrolls every 100 milliseconds
		}

		function startScrollDown() {
			window.scrollBy(0, 50); // horizontal and vertical scroll increments
		  scrolldelay = setTimeout('startScrollDown()', 200); // scrolls every 100 milliseconds
		}

		function stopScroll() {
		  clearTimeout(scrolldelay);
		}



// Search Function

function searchfn(){
			if(count!=0){
				refVar.css("color", "");
			}
			else
				count = 1;

			str = speechResult.toLowerCase().replace(/\b[a-z]/g, function(letter) {
			    return letter.toUpperCase();
			});
			console.log("this is serach fn --------------" +str);
			a = $("a:contains("+str+")");
			refVar = a;
			refVar.css("color", "red");
			console.log("this is you know            ------- "     +refVar +"    end");
			testSpeech();
		}		



// Open Link in New Tab Function

function openlinkfn(){
			testSpeech();
			var add = a.attr('href');
			console.log("this is address            ------- "     +a +"    end");
			console.log("this is final address -----------" +a);
			window.open(add);
		}

// Find next similar Search Item

function next(){
   if(nextval<a.length-1){nextval++;}
   else {nextval = 0;}
   a[nextval].scrollIntoView({block: "start", behavior: "smooth"});
   refVar[0] = a[nextval];
 	testSpeech();
}

// Go Back to Similar Search item 

function back(){
   if(nextval>0){nextval--;}
   else {nextval =( a.length -1);}
   refVar[0] = a[nextval];
   a[nextval].scrollIntoView({block: "start", behavior: "smooth"});
 	testSpeech();
}


// Youtube Search

function youtubeSearch(){
	$("#search-btn").click();
	testSpeech();
}

// Google Search

function googleSearch(){
	$(".lsb").click();
	testSpeech();
}

// Google Map Search

// Search The Input Item

 function mapSearch(){
 	$("#searchbox-searchbutton").click();
	testSpeech();
 }

// Open Direction To The Perticular Location

function mapDirection(){
	$("#searchbox-directions").click();
	addNextInput();
}

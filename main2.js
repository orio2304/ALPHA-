//const-start stop
const startBtn = document.querySelector("#start"); 
const stopBtn = document.querySelector("#stop");

//speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition = new SpeechRecognition();

//VR start
recognition.onstart = function(){
    console.log("vr intiated");
};

//VR STOP
recognition.onend = function(){
    console.log("vr deactivated");
};

recognition.onresult = function(event){
   let current = event.resultIndex;
   let transcript = event.results[current][0].transcript;
   transcript = transcript.toLowerCase();
   console.log(transcript);
   
   if(transcript.includes("hello, jarvis")){
      readOut("hello sir");
   console.log("hello sir")
   }
   if(transcript.includes("open youtube")){
      readOut("opening youtube sir");
   window.open("https://www.youtube.com/");
   }
   if(transcript.includes("open instagram")){
      readOut("opening instagram sir");
   window.open("https://www.instagram.com/?hl=en");
   }     
   if(transcript.includes("good morning")){
      readOut("goodmorning sir");
   }
   if(transcript.includes("good afternoon")){
      readOut("good afternoon sir");
   }
   if(transcript.includes("good evening")){
      readOut("good evening sir");
   }
   if(transcript.includes("good night")){
      readOut("have a goodnight sir, bye, closing engine");
   }
   if(transcript.includes("bye")){
      readOut("bye sir");
   }
   if(transcript.includes("open netflix")){
      readOut("opening netflix");
   window.open("https://www.netflix.com/browse");
   }
   if(transcript.includes("open pinterest")){
      readOut("opening pinterest ");
   window.open("https://in.pinterest.com/");
   }
   if(transcript.includes("open spotify")){
      readOut("opening spotify ");
   window.open("https://open.spotify.com/");
   }
   if(transcript.includes("open whatsapp")){
      readOut("opening whatsapp ");
   window.open("https://web.whatsapp.com/");
   }
   if(transcript.includes("open youtube music")){
      readOut("opening youtube music ");
   window.open("https://music.youtube.com/watch?v=532toSHe57E&list=PLWfyBzs9p_5qSy_d-rmsMufri7aQy3Acs");
   }
   if(transcript.includes("open chats with sonu ")){
      readOut("opening your chats with neel ");
   window.open("https://www.instagram.com/direct/t/115657086656501/?hl=en");
   }
   if(transcript.includes("open chats with neha ")){
      readOut("opening your chats with neha ");
   window.open("https://www.instagram.com/direct/t/17847165827719638/?hl=en");
   }
   if(transcript.includes("is neha mad")){
      console.log("yes")
      readOut("neha is a highly dumb species of reckless animal thinking she is smart but is one number haap and she is also a of sister of the smartest and the most handsome guy in the world prem");
   }
   if(transcript.includes("play inception in netflix")){
      console.log("yes") 
      readOut("playing inception");
      window.open("https://www.netflix.com/browse?jbv=70131314");
   }
   if(transcript.includes("open chatGPT")){
      console.log("yes")
      readOut("opening chatGPT");
      window.open("https://chat.openai.com/");
   }
   if(transcript.includes("open my lab")){
      console.log("yes")
      readOut("opening physics simulant lab");
      window.open("https://ophysics.com/index.html");
   }
   if(transcript.includes("open github")){
      console.log("yes")
      readOut("opening github");
      window.open("https://github.com/");
   }
   if(transcript.includes("open base")){
      console.log("yes")
      readOut("opening base");
      window.open("https://portal.baseedu.in/student");
   }
   if(transcript.includes("hi jarvis long time")){
      console.log("yes")
      readOut("mooch bai , baal natak maad beda fuck u");
      window.open("https://portal.baseedu.in/student");
   }
   if(transcript.includes("jarvis satellite images")){
      console.log("yes")
      readOut("satelite image popping");
      window.open("https://www.google.com/maps/@15.3655958,75.099853,178m/data=!3m1!1e3!5m1!1e4?entry=ttu");
   }
   if(transcript.includes("who is friday")){
      console.log("yes")
      readOut("friday , according to ironman movies it is an A I ");
      
   }
   if(transcript.includes("call ayush")){
      console.log("yes")
      readOut("calling ayush ");
      
   }
};



recognition.continuous = true;
startBtn.addEventListener("click", () =>{
   recognition.start();
});

stopBtn.addEventListener("click", () =>{
    recognition.stop();
 });

 //friday speech
 function readOut(message){
    const speech = new SpeechSynthesisUtterance();
    //different voices
    const allVoices = speechSynthesis.getVoices();
    speech.text = message;
    speech.voice = allVoices[36];
    speech.volume = 1 ;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
 }


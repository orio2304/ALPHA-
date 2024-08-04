//const-start stop
const startBtn = document.querySelector("#start"); 
const stopBtn = document.querySelector("#stop");

//speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;
//command
const recognition = new SpeechRecognition();

//VR start
recognition.onstart = function(){
    console.log("vr intiated");
};

//VR STOP
recognition.onend = function(){
    console.log("vr deactivated");
};

var a3= new Audio("mixkit-fast-sci-fi-bleep-903.wav");

recognition.onresult = function(event){
   let current = event.resultIndex;
   let transcript = event.results[current][0].transcript;
   transcript = transcript.toLowerCase();
   console.log(transcript);
   
   if(transcript.includes("hello, jarvis")){
      readOut("hello sir");
   console.log("hello sir")
   var  audio = new Audio('mixkit-high-tech-bleep-confirmation-2520.wav');
   audio.play();
   }
   if(transcript.includes("jarvis open youtube")){
      readOut("opening youtube sir");
   window.open("https://www.youtube.com/");
   a3.play();
   }
   if(transcript.includes("jarvis refresh")){
      var a1 = new Audio('mixkit-sci-fi-high-tech-sounds-860.wav');
      a1.play();
   }
   if(transcript.includes("jarvis open instagram")){
      readOut("opening instagram sir");
   window.open("https://www.instagram.com/?hl=en");
   a3.play();
   }     
   if(transcript.includes("good morning")){
      readOut("goodmorning sir");
      a3.play();
   }
   if(transcript.includes("good afternoon")){
      readOut("good afternoon sir");
      a3.play();
   }
   if(transcript.includes("good evening")){
      readOut("good evening sir");
      a3.play();
   }
   if(transcript.includes("good night")){
      readOut("have a goodnight sir, bye, closing engine");
      a3.play();
   }
   if(transcript.includes("bye")){
      readOut("bye sir");
      a3.play();
   }
   if(transcript.includes("open netflix")){
      readOut("opening netflix");
   window.open("https://www.netflix.com/browse");
   a3.play();
   }
   }
   if(transcript.includes("open pinterest")){
      readOut("opening pinterest ");
   window.open("https://in.pinterest.com/");
   a3.play();
   }
   if(transcript.includes("open spotify")){
      readOut("opening spotify ");
   window.open("https://open.spotify.com/");
   a3.play();
   }
   if(transcript.includes("open whatsapp")){
      readOut("opening whatsapp ");
   window.open("https://web.whatsapp.com/");
   a3.play();
   }
   if(transcript.includes("open youtube music")){
      readOut("opening youtube music ");
   window.open("https://music.youtube.com/watch?v=532toSHe57E&list=PLWfyBzs9p_5qSy_d-rmsMufri7aQy3Acs");
   a3.play();
   }
   if(transcript.includes("open chats with sonu ")){
      readOut("opening your chats with neel ");
   window.open("https://www.instagram.com/direct/t/115657086656501/?hl=en");
   a3.play();
   }
   if(transcript.includes("open chats with neha ")){
      readOut("opening your chats with neha ");
   window.open("https://www.instagram.com/direct/t/17847165827719638/?hl=en");
   a3.play();
   }
   if(transcript.includes("is neha mad")){
      console.log("yes")
      a3.play();
      readOut("neha is a highly dumb species of reckless animal thinking she is smart but is one number haap and she is also a of sister of the smartest and the most handsome guy in the world prem");
   }
   if(transcript.includes("play inception in netflix")){
      console.log("yes") 
      readOut("playing inception");
      window.open("https://www.netflix.com/browse?jbv=70131314");
      a3.play();
   }
   if(transcript.includes("open chatGPT")){
      console.log("yes")
      readOut("opening chatGPT");
      window.open("https://chat.openai.com/");
      a3.play();
   }
   if(transcript.includes("open my lab")){
      console.log("yes")
      readOut("opening physics simulant lab");
      window.open("https://ophysics.com/index.html");
      a3.play();
   }
   if(transcript.includes("open gitub")){
      console.log("yes")
      readOut("opening github");
      window.open("https://github.com/");
      a3.play();
   }
   if(transcript.includes("open base")){
      console.log("yes")
      readOut("opening base");
      window.open("https://portal.baseedu.in/student");
      a3.play();
   }
   if(transcript.includes("hi jarvis long time")){
      console.log("yes")
      readOut("mooch bai , baal natak maad beda ");
      a3.play();
   }
   if(transcript.includes("jarvis satellite images")){
      console.log("yes")
      readOut("satelite image popping");
      window.open("https://www.google.com/maps/@15.3655958,75.099853,178m/data=!3m1!1e3!5m1!1e4?entry=ttu");
      a3.play();
   
   }
   if(transcript.includes("who is friday")){
      console.log("yes")
      readOut("friday , according to ironman movies it is an A I ");
      a3.play();
   }
   if(transcript.includes("call ayush")){
      console.log("yes")
      readOut("calling ayush ");
      a3.play();
   }
   if(transcript.includes("what do you think about ayush j ")){
      console.log("yes")
      readOut("in my opinion , kind of good guy , i have record you guys laugh vigorously ,i expect you and ayush as a good friend");
      a3.play();
   }
   if(transcript.includes("wake up daddy's home ")){
      console.log("yes")
      readOut("welcome home sir , its been a long time without your commands");
      var a2 = new Audio('mixkit-fast-sci-fi-bleep-903.wav');
      a2.play();
   }

   if(transcript.includes("jarvis , drop my needle")){
      console.log("yes")
      readOut("let's go ");
      windows.open("https://www.youtube.com/watch?v=X1gwWfmLVw4&list=WL&index=5");
      a3.play();
   }




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


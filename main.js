


var playButton = document.getElementById('play-button')

playButton.addEventListener('click', () =>{
    playText("initiating jarvis v1 engine");
    var a6=new Audio('mixkit-high-tech-bleep-confirmation-2520.wav');
    a6.play();
  });

  
  function playText(text){
    var utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
  }

  

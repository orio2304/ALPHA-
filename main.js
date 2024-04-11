


var playButton = document.getElementById('play-button')

playButton.addEventListener('click', () =>{
    playText("initiating jarvis v1 engine");
  });

  
  function playText(text){
    var utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
  }

  

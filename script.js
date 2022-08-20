const boxes = document.querySelectorAll(".box")
const startButton = document.querySelector("#start-button")
let audioRed = new Audio("audio/bootsy__saturn-loop.wav")
let audioGreen = new Audio("audio/jungle__water-drop.wav")
let audioBlue = new Audio("audio/madjad__indonesian-thum-strike.wav")
let audioYellow = new Audio("audio/neatonk__piano-med.wav")



let numRounds = 5;
let userScore = 0
let cpuBoxesSelectedList = []

function selectBox() {
     // Returns a random integer from 0 to 3:
     let randomNum = Math.floor(Math.random() * 4);
    
     console.log(boxes[randomNum].id);
     boxes[randomNum].classList.add("selected")
     boxes[randomNum].addEventListener("transitionend", function (e) {
        if (boxes[randomNum].id === 'box-1'){
            audioRed.play();
        }
        if (boxes[randomNum].id === 'box-2'){
            audioGreen.play();
        }
        if (boxes[randomNum].id === 'box-3'){
            audioBlue.play();
        }
        if (boxes[randomNum].id === 'box-4'){
            audioYellow.play();
        }
        this.classList.remove("selected")
     });
    cpuBoxesSelectedList.push(boxes[randomNum].id)
  };

  function selectBoxLoop(loopCountParam){
    loopCount = loopCountParam
    var intervalId = window.setInterval(function(){
        selectBox();
        loopCount--;
        if (loopCount === 0){
            console.log(cpuBoxesSelectedList)
            clearInterval(intervalId)
            loopCount = loopCountParam
        }
      }, 1200);
  }

  startButton.addEventListener("click", function (e){
    selectBoxLoop(numRounds);
  });
  
  
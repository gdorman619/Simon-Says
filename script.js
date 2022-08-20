const boxes = document.querySelectorAll(".box")
const startButton = document.querySelector("#start-button")

let numRounds = 5;
let userScore = 0
let cpuBoxesSelectedList = []

function selectBox() {
     // Returns a random integer from 0 to 3:
     let randomNum = Math.floor(Math.random() * 4);
    
     console.log(boxes[randomNum].id);
     boxes[randomNum].classList.add("selected")
     boxes[randomNum].addEventListener("transitionend", function (e) {
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
      }, 800);
  }

  startButton.addEventListener("click", function (e){
    selectBoxLoop(numRounds);
  });
  
  
const boxes = document.querySelectorAll(".box")
const startButton = document.querySelector("#start-button")

let numRounds = 1;
let userScore = 0

function selectBox() {
     // Returns a random integer from 0 to 3:
     let randomNum = Math.floor(Math.random() * 4);
    
     console.log(boxes[randomNum].id);
     boxes[randomNum].classList.add("selected")
     boxes[randomNum].addEventListener("transitionend", function (e) {
        this.classList.remove("selected")
     });
       
  };


  startButton.addEventListener("click", function (e){

    var intervalId = window.setInterval(function(){
        selectBox();
        numRounds--;
        if (numRounds === 0){
            clearInterval(intervalId)
            numRounds = 1
        }
      }, 800);

  });
  
  
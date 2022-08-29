const boxes = document.querySelectorAll(".box");
const startButton = document.querySelector("#start-button");
let userScoreText = document.querySelector("#score");
let titleText = document.querySelector(".title");
let audioRed = new Audio("audio/bootsy__saturn-loop.wav");
let audioGreen = new Audio("audio/jungle__water-drop.wav");
let audioBlue = new Audio("audio/madjad__indonesian-thum-strike.wav");
let audioYellow = new Audio("audio/neatonk__piano-med.wav");


let cpuSequence = [];
let userSequence = [];
let userSequenceIndex = 0;
let score = 0;
let canClick = true;
let gameStarted = false;

function selectBox(boxNum) {
    
     boxes[boxNum].classList.add("selected")

     boxes[boxNum].addEventListener("transitionend", function (e) {
        if (boxes[boxNum].id === 'box-1'){
            audioRed.play();
        }
        if (boxes[boxNum].id === 'box-2'){
            audioGreen.play();
        }
        if (boxes[boxNum].id === 'box-3'){
            audioBlue.play();
        }
        if (boxes[boxNum].id === 'box-4'){
            audioYellow.play();
        }
        this.classList.remove("selected")
     });
  };

  function cpuSequenceLoop(){

    canClick = false;

    titleText.innerHTML = 'FOCUS!';

    let cpuSequenceCounter = 0;
    
    let intervalId = window.setInterval(function(){
        selectBox(cpuSequence[cpuSequenceCounter]);
        if (cpuSequenceCounter === cpuSequence.length - 1){
            cpuSequenceCounter = 0;
            clearInterval(intervalId);
            setTimeout(()=> {
                titleText.innerHTML = 'GO!';
                canClick = true;
            },1000);

        }
        else{
            cpuSequenceCounter += 1;
        }
      }, 1200);
  };

  function addCpuSequenceNumber(){
    let randomNum = Math.floor(Math.random() * 4);
    cpuSequence.push(randomNum);
  }

  function nextRound(){

    setTimeout(()=> {
        score += 1;
        userScoreText.innerHTML = score;
        addCpuSequenceNumber()
        userSequenceIndex = 0;
        userSequence = [];
        cpuSequenceLoop();
    },800);
    
  };

  boxes[0].addEventListener("click", function (e){
    if (canClick === true && gameStarted === true){
        console.log('red');
        selectBox(0);
        userSequence.push(0);
        if (checkUserSelection(userSequenceIndex) === true){
            if (userSequenceIndex === cpuSequence.length - 1 ){
                nextRound();
            }else{
                userSequenceIndex += 1;
            }
        }
    } 
  });

  boxes[1].addEventListener("click", function (e){
    if (canClick === true && gameStarted === true){
        console.log('green');
        selectBox(1);
        userSequence.push(1);
        if (checkUserSelection(userSequenceIndex) === true){
            if (userSequenceIndex === cpuSequence.length - 1 ){
                nextRound();
            }else{
                userSequenceIndex += 1;
            }
        }
    }
  });

  boxes[2].addEventListener("click", function (e){
    if (canClick === true && gameStarted === true){
        console.log('blue');
        selectBox(2);
        userSequence.push(2);
        if (checkUserSelection(userSequenceIndex) === true){
            if (userSequenceIndex === cpuSequence.length - 1 ){
                nextRound();
            }else{
                userSequenceIndex += 1;
            }
        }
    }
  });

  boxes[3].addEventListener("click", function (e){
    if (canClick === true && gameStarted === true){
        console.log('yellow');
        selectBox(3);
        userSequence.push(3);
        if (checkUserSelection(userSequenceIndex) === true){
            if (userSequenceIndex === cpuSequence.length - 1 ){
                nextRound();
            }else{
                userSequenceIndex += 1;
            }
        }
    }
  });

  function gameOver(){
    titleText.innerHTML = 'GAME OVER';
    gameStarted = false;
    cpuSequence = [];
    userSequence = [];
    userSequenceIndex = 0;
  };

  function checkUserSelection(numIndex){
    if (userSequence[numIndex] === cpuSequence[numIndex]){
        return true;
    }else{
        gameOver();
    }
  }

  startButton.addEventListener("click", function (e){
    if (canClick === true){
        gameStarted = true;
        cpuSequence = [];
        userSequence = [];
        userSequenceIndex = 0;
        score = 0;
        userScoreText.innerHTML = score;
        addCpuSequenceNumber();
        cpuSequenceLoop();
    }  
  });
  
  
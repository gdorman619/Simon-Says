const boxes = document.querySelectorAll(".box");
const startButton = document.querySelector("#start-button");
let audioRed = new Audio("audio/bootsy__saturn-loop.wav");
let audioGreen = new Audio("audio/jungle__water-drop.wav");
let audioBlue = new Audio("audio/madjad__indonesian-thum-strike.wav");
let audioYellow = new Audio("audio/neatonk__piano-med.wav");


let cpuSequence = [];
let userSequence = [];
let round = 0;

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

    if (cpuSequence.length === 0){
        addCpuSequenceNumber();
    }

    let cpuSequenceCounter = 0;
    
    let intervalId = window.setInterval(function(){
        selectBox(cpuSequence[cpuSequenceCounter]);
        if (cpuSequenceCounter === cpuSequence.length - 1){
            cpuSequenceCounter = 0;
            clearInterval(intervalId);
        }
        else{
            cpuSequenceCounter += 1;
        }
      }, 1200);
  };

  function addCpuSequenceNumber(){
    let randomNum = Math.floor(Math.random() * 4);
    console.log(randomNum);
    cpuSequence.push(randomNum);
  }

  boxes[0].addEventListener("click", function (e){
    console.log('red');
    selectBox(0);
  });

  boxes[1].addEventListener("click", function (e){
    console.log('green');
    selectBox(1);
  });

  boxes[2].addEventListener("click", function (e){
    console.log('blue');
    selectBox(2);
  });

  boxes[3].addEventListener("click", function (e){
    console.log('yellow');
    selectBox(3);
  });


  startButton.addEventListener("click", function (e){
    round = 1;
    cpuSequence = []
    cpuSequenceLoop();
  });
  
  
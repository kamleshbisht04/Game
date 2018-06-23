var easy=document.querySelector("#easy");

var hard=document.querySelector("#hard");
var score=document.querySelector("#score");
var word=document.querySelector("#word");
var answer=document.querySelector("#answer");
var timeline=document.querySelector(".progress-bar");

var progressHTMl=document.querySelector(".progress");
var progressHTMLvalue=progressHTMl.innerHTML;


var array;
var hardArray=[,"advise","affect","afford","afraid","agency","agenda","almost","always","amount","animal","annual","appear","around"];
var easyArray=["bath","bear","beat","been","beer","bell","belt","best","bill","bird","blow","blue","boat"];

var interval1;
var interval2;

var finalScore;

easy.addEventListener("click",easymode);
hard.addEventListener("click",hardmode);

word.innerHTML="select difficulty";


function easymode(event){
  clearInterval(interval1);
  clearInterval(interval2);
  progressHTMl.innerHTML=progressHTMLvalue;
  timeline=document.querySelector(".progress-bar");
  
  hard.classList.toggle('active',false);
  easy.classList.toggle('active',true);
  answer.select();
  array=easyArray;
  answer.value="";
  score.innerHTML="0";
  countdown();
}

function hardmode(event){
  clearInterval(interval1);
  clearInterval(interval2);
  progressHTMl.innerHTML=progressHTMLvalue;
  timeline=document.querySelector(".progress-bar");
  easy.classList.toggle('active',false);
  
  hard.classList.toggle('active',true);
  answer.select();
  array=hardArray;
  answer.value="";
  score.innerHTML="0";
  countdown();
}

function countdown(){
  var i=2;
  word.innerHTML=3;
  interval1=setInterval(count,1000);
  function count(){
    word.innerHTML=i;
    i-=10;
    if(i<0){
      clearInterval(interval1);
      gameStart();
      return;
    }
    return;
  }
}

function gameStart(){
  finalScore=0;
  word.innerHTML=(array[Math.floor((Math.random()*array.length))]).toLowerCase();
  var perc=0;
  interval2=setInterval(count,40);
  function count(){
    perc+=2
    timeline.style.width=perc+"%";
    if(perc==100){
      progressHTMl.innerHTML=progressHTMLvalue;
      timeline=document.querySelector(".progress-bar");
      if(answer.value.toLowerCase()!=(word.innerHTML).toLowerCase()){
        clearInterval(interval2);
        gameEnd();
        return;
      }
      finalScore++;
      score.innerHTML=finalScore;
      word.innerHTML=(array[Math.floor((Math.random()*array.length))]).toLowerCase();
      answer.value="";
      perc=0;
    }
    return;
  }
  return;
}
function gameEnd(){
  word.innerHTML="try again";
  answer.value="";
  window.getSelection().empty();
}
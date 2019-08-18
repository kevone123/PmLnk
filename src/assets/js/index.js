let countdown=0;
let seconds=1500;
let breakTimer=25;
let workTimer=5;
let isPaused=true; 
let isBreak=true;

const status = document.getElementById('status');
const timerDisplay = document.querySelector(".timerDisplay");
const startBttn=document.getElementById('start');
const stopBttn=document.getElementById('stop');
const resetBttn=document.getElementById('reset');

const alarm = document.createElement('audio'); // A bell sound will play when the timer reaches 0
alarm.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");

/* Event Listener for startBttn, stpBttn, reset */
startBttn.addEventListener('click',() => {
    clearInterval(countdown);
    isPaused=!isPaused;
    countdown=setInterval(timer,1000);
})
stopBttn.addEventListener('click',()=>{
    clearInterval(countdown);
})

resetBttn.addEventListener('click',()=>{
    clearInterval(countdown);
    seconds= workTimer * 60;
    countdown=0;
    isPaused=true;
    isBreak=true;
})
/* this function deals with countingDown*/
function timer(){
    seconds--;
    if(seconds<0){
        //clearInterval(countdown);
        alarm.currentTime=0;
        alarm.play();
        seconds=(isBreak ? breakTimer : workTimer) * 60;
        isBreak=!isBreak;
    }
}
/*Updates html */
function countDownDisplay(){
    let minutes=Math.floor(seconds/60);
    let remainderSeconds=seconds%60;
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    //countDownDisplay();
}
function checkInterval(){
    /*
      timer fucntion
      work
      break
       start click 
       work timer function called
       then break
         timer should be called if break timer is maximum value
       timer stops
    */
   if(seconds/60==breakTimer){
    clearInterval(countdown);
    countdown=setInterval(timer,1000);
    }
}

function updateHTML(){
    countDownDisplay();
    isBreak ? status.textContent = "Keep Working" : status.textContent = "Take a Break!";
    //checkInterval();
}

window.setInterval(updateHTML, 100);
document.onclick = updateHTML;
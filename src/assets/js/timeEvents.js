function ani(){
    document.getElementById('plane').className ='animation';
}
function anitwo(){
    document.getElementById('bg').className ='animation2';
}

//set the logic for the vaeriable with a function
//set the text based on clickeing

var h2 = document.getElementsByTagName('h2')[0],
start = document.getElementById('start'),
stop = document.getElementById('stop'),
clear = document.getElementById('clear'),
seconds = 0, minutes = 0, hours = 0,
t;

//need to define how variables are set 
function add() {
seconds++;
if (seconds >= 60) {
seconds = 0;
minutes++;
if (minutes >= 60) {
    minutes = 0;
    hours++;
}
}
//set what the fields of the text look like
//if hours seconds or minutes

if(seconds==25){
   // openInNewTab("https://duckdev.com");
}
if(minutes==25){
clearTime();
}

console.log(hours)
h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

timer();

}
function countdown(){
// Chnage your redirection link here
window.location = "https://duckdev.com";
}
function openInNewTab(url) {
var win = window.open(url, '_blank');
win.focus();
}

// /evaluates timer expression after a specified number of milliseconds.
function timer() {
t = setTimeout(add, 1000);
}


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
clearTimeout(t);
}
function clearTime(){
h2.textContent = "00:00:00";
seconds = 0; minutes = 0; hours = 0;
}

/* Clear button */
clear.onclick = function() {
clearTime();
}


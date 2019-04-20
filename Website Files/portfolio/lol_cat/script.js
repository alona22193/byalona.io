
var message = document.getElementById('timeEvent');
var messageText;
var wakeupTime;
var noon = 12;
var lunchTime;
var napTime;
var partyTime = 15;
var evening = 17;
var partyTimeButton = document.getElementById("partyTimeButton");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var clock = document.getElementById("clock");
var isPartyTime = false;
var currentTime = new Date();

var updateClock = function()
{

var showCurrentTime = function(){

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;

  }





partyTimeButton.event = function() {

   if (isPartyTime == true) {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   } else {
      isPartyTime = true;

      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   }
};

image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

var event = function(){
var time = new Date().getHours();

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time < noon) {
    messageText = "Good morning!";
    image = "http://lorempixel.com/output/cats-q-c-640-480-8.jpg";
} else if (time >= evening) {
    messageText = "Good Evening!";
    image = "http://lorempixel.com/output/cats-q-c-640-480-3.jpg";
} else {
    messageText = "Good afternoon!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
}
var time = document.getElementById("timeEvent");
time.textContent = messageText;

var lolcat = document.getElementById("lolcat");
lolcat.src = image;

}


var partyEvent = function() {partyTime = partyTimeButton.event();}

var lunchEvent = function() {
  lunchTime = lunchTimeSelector.value;
}
var wakeUpEvent = function() {
  wakeupTime = wakeUpTimeSelector.value;
}
var napEvent = function() {
  napTime = napTimeSelector.value;
}
event();
partyTimeButton.addEventListener('click', partyEvent);
partyTimeButton.addEventListener('click', event);

napTimeSelector.addEventListener('change', napEvent);

lunchTimeSelector.addEventListener('change', lunchEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

console.log(messageText);
message.innerText = messageText;

    showCurrentTime();
}


updateClock();
var oneSecond = 1000;
setInterval( updateClock, 1000);

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //Timer
  function countTimer(deadLine) {
    let timerHoures = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");

    function getTimeRemaining() {
      let dateStop = new Date(deadLine).getTime(),
        dateNow = new Date().getTime(),
        timeRemaning = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaning % 60),
        minutes = Math.floor((timeRemaning / 60) % 60),
        hours = Math.floor(timeRemaning / 60 / 60);

      return { timeRemaning, hours, minutes, seconds };
    }

    function updateClock() {
      let timer = getTimeRemaining();
      if(timer.hours < 10){
        timerHoures.textContent =  '0' + timer.hours;
      }else{
        timerHoures.textContent = timer.hours;
      }
      if(timer.minutes < 10){
        timerMinutes.textContent =  '0' + timer.minutes;
      }else{
        timerMinutes.textContent = timer.minutes;
      }
      if(timer.seconds < 10){
        timerSeconds.textContent =  '0' + timer.seconds;
      }else{
        timerSeconds.textContent = timer.seconds;
      }
      
      
      if (timer.timeRemaning <= 0) {
        clearInterval(timerId);
        timerHoures.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }
    }

    updateClock();
  }

  let timerId = setInterval(countTimer, 1000, "15 december 2020 12:11");
});

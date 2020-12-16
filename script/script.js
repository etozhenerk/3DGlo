window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //Timer
  const countTimer = (deadLine) => {
    let timerHoures = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");

    const getTimeRemaining = () => {
      let dateStop = new Date(deadLine).getTime(),
        dateNow = new Date().getTime(),
        timeRemaning = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaning % 60),
        minutes = Math.floor((timeRemaning / 60) % 60),
        hours = Math.floor(timeRemaning / 60 / 60);

      return { timeRemaning, hours, minutes, seconds };
    };

    const updateClock = () => {
      let timer = getTimeRemaining();
      if (timer.hours < 10) {
        timerHoures.textContent = "0" + timer.hours;
      } else {
        timerHoures.textContent = timer.hours;
      }
      if (timer.minutes < 10) {
        timerMinutes.textContent = "0" + timer.minutes;
      } else {
        timerMinutes.textContent = timer.minutes;
      }
      if (timer.seconds < 10) {
        timerSeconds.textContent = "0" + timer.seconds;
      } else {
        timerSeconds.textContent = timer.seconds;
      }

      if (timer.timeRemaning <= 0) {
        clearInterval(timerId);
        timerHoures.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
      }
    };

    updateClock();
  };

  let timerId = setInterval(countTimer, 1000, "16 december 2020 12:11");

  //menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector(".menu"),
      menu = document.querySelector("menu"),
      closeBtn = document.querySelector(".close-btn"),
      menuItems = menu.querySelectorAll("ul>li");

    const handlerMenu = (e) => {
      menu.classList.toggle("active-menu");
      
    };

    btnMenu.addEventListener("click", handlerMenu);
    closeBtn.addEventListener("click", handlerMenu);

    menuItems.forEach((elem) => elem.addEventListener("click",(e) => {
      handlerMenu();
      //плавная прокрутка
      e.preventDefault();
      const blockID = elem.firstChild.getAttribute('href');
      const block =  document.querySelector(blockID);
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }));
  };

  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector(".popup"),
      popupBtn = document.querySelectorAll(".popup-btn"),
      popupClose = document.querySelector(".popup-close");

    let op = 0.1;
    popup.style.opacity = op;

    popupBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        popup.style.display = "block";
        const timer = setInterval(() => {
          if (op >= 1) {
            clearInterval(timer);
          }
          popup.style.opacity = op;
          op += op * 0.1;
        }, 10);
      });
    });
    popupClose.addEventListener("click", () => {
      const timer = setInterval(() => {
        if (op <= 0.1) {
          clearInterval(timer);
          popup.style.display = "none";
        }
        popup.style.opacity = op;
        op -= op * 0.1;
      }, 10);
    });
  };
  togglePopUp();

  const animateServiceBlock = () => {
    const serviceBlock = document.querySelector('a[href="#service-block');
    serviceBlock.addEventListener('click', (e) =>{
      e.preventDefault();
      const blockID = serviceBlock.getAttribute('href');
      const block =  document.querySelector(blockID);
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  
  animateServiceBlock();
});

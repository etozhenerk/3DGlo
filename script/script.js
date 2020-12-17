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
      menuItems = menu.querySelectorAll("ul>li"),
      body = document.querySelector("body");

    const handlerMenu = () => {
      menu.classList.toggle("active-menu");
    };

    body.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".menu");
      if (target) {
        handlerMenu();
      } else {
        target = event.target;
        if (target.classList.contains("close-btn") || !target.closest("menu")) {
          handlerMenu();
        } else {
          target = target.closest("li");
          if (target) {
            handlerMenu();
            //плавная прокрутка
            event.preventDefault();
            const blockID = target.firstChild.getAttribute("href");
            const block = document.querySelector(blockID);
            block.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }
    });
  };

  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector(".popup"),
      popupBtn = document.querySelectorAll(".popup-btn");

    let op = 0.1;
    popup.style.opacity = op;

    let closePopup = () => {
      if (document.documentElement.clientWidth > 768) {
        const timer = setInterval(() => {
          if (op <= 0.1) {
            clearInterval(timer);
            popup.style.display = "none";
          }
          popup.style.opacity = op;
          op -= op * 0.1;
        }, 10);
      } else {
        op = 0.1;
        popup.style.opacity = op;
        popup.style.display = "none";
      }
    };
    let openPopup = () => {
      popup.style.display = "block";
      if (document.documentElement.clientWidth > 768) {
        const timer = setInterval(() => {
          if (op >= 1) {
            clearInterval(timer);
          }
          popup.style.opacity = op;
          op += op * 0.1;
        }, 10);
      } else {
        op = 1;
        popup.style.opacity = op;
      }
    };

    popupBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        openPopup();
      });
    });

    popup.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("popup-close")) {
        closePopup();
      } else {
        target = target.closest(".popup-content");
        if (!target) {
          closePopup();
        }
      }
    });
  };
  togglePopUp();

  const animateServiceBlock = () => {
    const serviceBlock = document.querySelector('a[href="#service-block');
    serviceBlock.addEventListener("click", (e) => {
      e.preventDefault();
      const blockID = serviceBlock.getAttribute("href");
      const block = document.querySelector(blockID);
      block.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  animateServiceBlock();

  const tabs = () => {
    const tabHeader = document.querySelector(".service-header"),
      tab = tabHeader.querySelectorAll(".service-header-tab"),
      tabContent = document.querySelectorAll(".service-tab");

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tab[i].classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      }
    };
    tabHeader.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".service-header-tab");
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();
});

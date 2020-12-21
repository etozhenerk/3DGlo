window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let timerId;
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

  timerId = setInterval(countTimer, 1000, "19 december 2020 12:11");

  //menu
  const toggleMenu = () => {
    const menu = document.querySelector("menu"),
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
        if (
          (target.classList.contains("close-btn") || !target.closest("menu")) &&
          menu.classList.contains("active-menu")
        ) {
          handlerMenu();
        } else {
          target = target.closest("menu li");
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

  //слайдер
  const slider = () => {
    const slide = document.querySelectorAll(".portfolio-item"),
      portfolioDots = document.querySelector(".portfolio-dots"),
      slider = document.querySelector(".portfolio-content");

    for (let i = 0; i < slide.length; i++) {
      let dot = document.createElement("li");
      dot.classList.add("dot");
      portfolioDots.append(dot);
    }
    const dot = document.querySelectorAll(".dot");
    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strSlide) => {
      elem[index].classList.remove(strSlide);
    };
    const nextSlide = (elem, index, strSlide) => {
      elem[index].classList.add(strSlide);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    };
    const startSlide = (time = 1000) => {
      interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener("click", (event) => {
      event.preventDefault();

      let target = event.target;

      if (target.matches(".portfolio-btn, .dot")) {
        prevSlide(slide, currentSlide, "portfolio-item-active");
        prevSlide(dot, currentSlide, "dot-active");

        if (target.matches("#arrow-right")) {
          currentSlide++;
        } else if (target.matches("#arrow-left")) {
          currentSlide--;
        } else if (target.matches(".dot")) {
          dot.forEach((elem, index) => {
            if (elem === target) {
              currentSlide = index;
            }
          });
        }

        if (currentSlide >= slide.length) {
          currentSlide = 0;
        }

        if (currentSlide < 0) {
          currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, "portfolio-item-active");
        nextSlide(dot, currentSlide, "dot-active");
      }
    });

    slider.addEventListener("mouseover", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        stopSlide();
      }
    });
    slider.addEventListener("mouseout", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        startSlide();
      }
    });

    startSlide();
  };

  slider();
  
  // по наведению мышкой меняются фотографии, а если увести мышку с элемента то возвращается прежняя фото
  const changeCommadPhoto = () => {
    const command = document.querySelector(".command"),
      src = {};
    command.addEventListener("mouseover", (event) => {
      const target = event.target;
      if (target.matches(".command__photo")) {
        src[target.dataset.img] = target.src;
        target.src = target.dataset.img;
      }
    });
    command.addEventListener("mouseout", (event) => {
      const target = event.target;
      if (target.matches(".command__photo")) {
        target.src = src[target.dataset.img];
      }
    });
  };

  changeCommadPhoto();

//В калькуляторе ввод только цифр
  const formValidation = () => {
    const form = document.querySelector(".calc-block");
    form.addEventListener("input", (event) => {
      const target = event.target;
      if (target.matches("input.calc-item")) {
        target.value = target.value.replace(/\D/, "");
      }
    });
  };

  formValidation();
});

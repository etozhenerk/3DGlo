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

export default togglePopUp;
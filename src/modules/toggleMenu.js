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

export default toggleMenu;
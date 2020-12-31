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

export default changeCommadPhoto;
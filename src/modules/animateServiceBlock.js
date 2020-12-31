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

export default animateServiceBlock;
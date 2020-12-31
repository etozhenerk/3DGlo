const formValidation = () => {
  const form = document.querySelector(".calc-block");
  form.addEventListener("input", (event) => {
    const target = event.target;
    if (target.matches("input.calc-item")) {
      target.value = target.value.replace(/\D/, "");
    }
  });
};

export default formValidation;
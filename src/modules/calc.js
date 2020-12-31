const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block"),
    calcType = document.querySelector(".calc-type"),
    calcSquare = document.querySelector(".calc-square"),
    calcDay = document.querySelector(".calc-day"),
    calcCount = document.querySelector(".calc-count"),
    totalValue = document.getElementById("total");

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1,
      count = 0,
      time = 10,
      step = 10;
    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
      if (total > 10000) {
        step = 100;
      }
      let oneTime = Math.round(time / step / total);
      let interval = setInterval(() => {
        count = count + step;

        if (count === total) {
          clearInterval(interval);
        }
        totalValue.textContent = count;
      }, oneTime);
    }

    totalValue.textContent = total;
  };

  calcBlock.addEventListener("change", (event) => {
    const target = event.target;
    if (
      target === calcType ||
      target === calcSquare ||
      target === calcDay ||
      target === calcCount
    ) {
      countSum();
    }
  });
};

export default calc;
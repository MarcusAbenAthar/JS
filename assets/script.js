function calculate() {
  const h = parseFloat(document.querySelector("#height").value);
  const w = parseFloat(document.querySelector("#weight").value);
  let bmi = w / (h * h);
  let result;
  if (isNaN(bmi)) {
    alert("Insira apenas números!");
  } else {
    result = document.querySelector("#result").value = bmi.toFixed(2);
  }

  return result;
}

function calculate() {
  const h = parseFloat(document.querySelector("#height").value);
  const w = parseFloat(document.querySelector("#weight").value);
  let bmi = w / (h * h);
  let result;
  if (isNaN(bmi)) {
    alert("Insira apenas números!");
  } else {
    result = document.querySelector("#result").value = bmi.toFixed(2);
    dataResult = document.querySelector("#data-result").style.display = "flex";
  }
  return result;
}

function reset() {
  document.querySelector("#height").value = "";
  document.querySelector("#weight").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#data-result").hidden = true;
  document.querySelector("#data-result").style.display = "none";
  alert("Campos limpos com sucesso!");
  return (result = document.querySelector("#result").value = "");
}

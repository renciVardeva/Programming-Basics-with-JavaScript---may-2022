function celsiusToFahrenheit(input) {
  let celsius = Number(input[0]);

  let celsiusToFahrenheitSum = (celsius * 9) / 5 + 32;
  let exCelsiusToFahrenheitSum = celsiusToFahrenheitSum.toFixed(2);

  console.log(exCelsiusToFahrenheitSum);
}
celsiusToFahrenheit(["32.3"]);

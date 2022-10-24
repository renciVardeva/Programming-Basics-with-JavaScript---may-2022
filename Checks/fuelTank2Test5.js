function fuelTank2(input) {
  let fuelType = (input[0]);
  let litres = Number(input[1]);
  let clubCard = (input[2]);

  let priceG = 2.22;
  let priceD = 2.33;
  let priceGas = 0.93;

  let totalCoast = 0;

  if (clubCard == "Yes") {
    priceG -= 0.18;
    priceD -= 0.12;
    priceGas -= 0.08;
  }
  if (fuelType == "Gasoline") {
    totalCoast = priceG * litres;
  } else if (fuelType == "Diesel") {
    totalCoast = priceD * litres;
  } else if (fuelType == "Gas") {
    totalCoast = priceGas * litres;
  }
  if (litres >= 20 && litres <= 25) {
    totalCoast -= totalCoast * 0.08;
    console.log(`${totalCoast.toFixed(2)} lv.`);
  } else if (litres > 25) {
    totalCoast -= totalCoast * 0.10;
    console.log(`${totalCoast.toFixed(2)} lv.`);
  } else if (clubCard == "No") {
    totalCoast = totalCoast;
    console.log(`${totalCoast.toFixed(2)} lv.`);
  }
}
fuelTank2(["Gasoline", "25", "No"]);

function pets(input) {
  let days = Number(input[0]);
  let totalFood = Number(input[1]);
  let dogPerDay = Number(input[2]);
  let catPerDay = Number(input[3]);
  let turtlePerDayGrams = Number(input[4]);

  let foodPerDay = dogPerDay + catPerDay + turtlePerDayGrams / 1000;
  let sumFood = foodPerDay * days;
  let diff = totalFood - sumFood;

  if (sumFood <= totalFood) {
    console.log(`${Math.floor(diff)} kilos of food left.`);
  } else {
    console.log(`${Math.abs(Math.floor(diff))} more kilos of food are needed.`);
  }
}
pets([2, 10, 1, 1, 1200]);

function safari(input) {
  let budget = Number(input[0]);
  let fuelNeadet = Number(input[1]);
  let day = input[2];

  let totalFuel = fuelNeadet * 2.1;
  let guide = 100;
  let sum = 0;

  switch (day) {
    case "Saturday":
      sum = (totalFuel + guide) * 0.9;
      break;
    case "Sunday":
      sum = (totalFuel + guide) * 0.8;
      break;
  }
  let diff = Math.abs(budget - sum);

  if (budget >= sum) {
    console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
  } else {
    console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
  }
}
safari(["120", "30", "Saturday"]);

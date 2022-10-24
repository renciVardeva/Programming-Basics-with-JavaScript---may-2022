function familyTrip(input) {
  let budget = Number(input[0]);
  let nightCount = Number(input[1]);
  let price = Number(input[2]);
  let extraMoney = Number(input[3]);

  let sum = 0;

  if (nightCount <= 7) {
    sum = nightCount * price + (budget * extraMoney) / 100;
  } else {
    sum = nightCount * price * 0.95 + (budget * extraMoney) / 100;
  }
  let diff = Math.abs(budget - sum);
  if (budget >= sum) {
    console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}
familyTrip(["500",
"7",
"66",
"15"])
;

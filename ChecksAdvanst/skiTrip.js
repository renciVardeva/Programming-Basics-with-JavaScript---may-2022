function skiTrip(input) {
  let days = Number(input[0]);
  let roomType = input[1];
  let feedback = input[2];
  let price = 0;

  switch (roomType) {
    case "room for one person":
      price = 18;
      break;
    case "apartment":
      price = 25;
      if (days < 10) {
        price *= 0.7;
      } else if (days >= 10 && days < 15) {
        price *= 0.65;
      } else if (days >= 15) {
        price *= 0.5;
      }
      break;
    case "president apartment":
      price = 35;
      if (days < 10) {
        price *= 0.9;
      } else if (days >= 10 && days < 15) {
        price *= 0.85;
      } else if (days > 15) {
        price *= 0.8;
      }
      break;
  }
  let totalPrice = (days - 1) * price;
  if (feedback === "positive") {
    totalPrice *= 1.25;
  } else {
    totalPrice *= 0.9;
  }
  console.log(totalPrice.toFixed(2));
}
skiTrip(["12", "room for one person", "positive"])

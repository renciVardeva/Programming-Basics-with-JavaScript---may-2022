function santaHoliday(input) {
  let days = Number(input[0]);
  let typeRoom = input[1];
  let rating = input[2];
  let pricePerNight = 0;
  let totalPrice = 0;

  if (typeRoom === "president apartment") {
    pricePerNight = 35.0;
    if (days < 10) {
      pricePerNight *= 0.9;
    } else if (days < 15) {
      pricePerNight *= 0.85;
    } else {
      pricePerNight *= 0.8;
    }
  } else if (typeRoom === "apartment") {
    pricePerNight = 25.0;
    if (days < 10) {
      pricePerNight *= 0.7;
    } else if (days < 15) {
      pricePerNight *= 0.65;
    } else {
      pricePerNight *= 0.5;
    }
  } else {
    pricePerNight = 18.0;
  }
  totalPrice = (days - 1) * pricePerNight;

  if (rating === "positive") {
    totalPrice *= 1.25;
  } else {
    totalPrice *= 0.9;
  }
  console.log(`${totalPrice.toFixed(2)}`);
}
santaHoliday(["30",
"president apartment",
"negative"])

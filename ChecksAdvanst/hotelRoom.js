function hotelRoom(input) {
  let month = input[0];
  let nightCount = Number(input[1]);

  let priceStudio = 0;
  let priceApartment = 0;

  switch (month) {
    case "May":
    case "October":
      priceStudio = 50;
      priceApartment = 65;
      if (nightCount > 14) {
        priceStudio *= 0.7;
        priceApartment *= 0.9;
      } else if (nightCount > 7) {
        priceStudio *= 0.95;
      }
      break;
    case "June":
    case "September":
      priceStudio = 75.2;
      priceApartment = 68.7;
      if (nightCount > 14) {
        priceStudio *= 0.8;
        priceApartment *= 0.9;
      }
      break;
    case "July":
    case "August":
      priceStudio = 76;
      priceApartment = 77;
      if (nightCount > 14) {
        priceApartment *= 0.9;
      }
      break;
  }

  let totalPriceStudio = nightCount * priceStudio;
  let totalPriceApartment = nightCount * priceApartment;
  console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);

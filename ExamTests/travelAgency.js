function travelAgency(input) {
  let townName = input[0];
  let serviceType = input[1];
  let vipCard = input[2];
  let daysSpend = Number(input[3]);

  let price = 0;

  switch (townName) {
    case "Bansko":
    case "Borovets":
      switch (serviceType) {
        case "noEquipment":
          price = daysSpend * 80;
          if (daysSpend > 7) {
            price = (daysSpend - 1) * 80;
          }
          if (vipCard === "yes") {
            price *= 0.95;
          }
          break;
        case "withEquipment":
          price = daysSpend * 100;
          if (daysSpend > 7) {
            price = (daysSpend - 1) * 100;
          }
          if (vipCard === "yes") {
            price *= 0.9;
          }
          break;
      }

    case "Varna":
    case "Burgas":
      switch (serviceType) {
        case "noBreakfast":
          price = daysSpend * 100;
          if (daysSpend > 7) {
            price = (daysSpend - 1) * 100;
          }
          if (vipCard === "yes") {
            price *= 0.93;
          }
          break;
        case "withBreakfast":
          price = daysSpend * 130;
          if (daysSpend > 7) {
            price = (daysSpend - 1) * 130;
          }
          if (vipCard === "yes") {
            price *= 0.88;
          }
          break;
      }
  }

  if (daysSpend < 1) {
    console.log("Days must be positive number!");
  } else if (
    (townName !== "Bansko" &&
      townName !== "Borovets" &&
      townName !== "Varna" &&
      townName !== "Burgas") ||
    (serviceType !== "noEquipment" &&
      serviceType !== "withEquipment" &&
      serviceType !== "noBreakfast" &&
      serviceType !== "withBreakfast") ||
    (vipCard !== "yes" && vipCard !== "no")
  ) {
    console.log("Invalid input!");
  } else {
    console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
  }
}
travelAgency(["Borovets", "noEquipment", "yes", "6"]);

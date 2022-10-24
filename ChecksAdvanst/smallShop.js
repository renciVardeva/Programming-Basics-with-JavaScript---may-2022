function smallShop(input) {
  const product = input[0];
  const sity = input[1];
  const quant = Number(input[2]);
  let price = 0;

  switch (sity) {
    case "Sofia":
      switch (product) {
        case "coffee":
          price = quant * 0.5;
          break;
        case "water":
          price = quant * 0.8;
          break;
        case "beer":
          price = quant * 1.2;
          break;
        case "sweets":
          price = quant * 1.45;
          break;
        case "peanuts":
          price = quant * 1.6;
          break;
      }
      break;
    case "Plovdiv":
      switch (product) {
        case "coffee":
          price = quant * 0.4;
          break;
        case "water":
          price = quant * 0.7;
          break;
        case "beer":
          price = quant * 1.15;
          break;
        case "sweets":
          price = quant * 1.3;
          break;
        case "peanuts":
          price = quant * 1.5;
          break;
      }
      break;
    case "Varna":
      switch (product) {
        case "coffee":
          price = quant * 0.45;
          break;
        case "water":
          price = quant * 0.7;
          break;
        case "beer":
          price = quant * 1.1;
          break;
        case "sweets":
          price = quant * 1.35;
          break;
        case "peanuts":
          price = quant * 1.55;
          break;
      }
      break;
  }
  console.log(price);
}
smallShop(["sweets", "Sofia", "2.23"]);

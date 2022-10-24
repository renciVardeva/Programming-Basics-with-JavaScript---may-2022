function fruitMarket(input) {
  let strawPrice =   (input[0]);
  let bananaCount =  (input[1]);
  let orangeCount =  (input[2]);
  let raspCount =  (input[3]);
  let strawCount =  (input[4]);

  let raspPrice = strawPrice * 0.5;
  let orangePrice = raspPrice * 0.6;
  let bananaPrice = raspPrice * 0.2;

  let totalStr = strawPrice * strawCount;
  let totalBanana = bananaPrice * bananaCount;
  let totalOrange = orangePrice * orangeCount;
  let totalRasp = raspPrice * raspCount;

  let totalPrice = totalRasp + totalOrange + totalBanana + totalStr;

  console.log(totalPrice.toFixed(2));
}
fruitMarket([48, 10, 3.3, 6.5, 1.7]);

function flowerShop(input) {
  let magnoliaCount = Number(input[0]);
  let hyacinthCount = Number(input[1]);
  let roseCount = Number(input[2]);
  let cactusCount = Number(input[3]);
  let giftPrice = Number(input[4]);

  let orderSum =
    magnoliaCount * 3.25 +
    hyacinthCount * 4 +
    roseCount * 3.5 +
    cactusCount * 8;
  let tax = orderSum * 0.05;
  let profit = orderSum - tax;
  let diff = profit - giftPrice;

  if (giftPrice <= profit) {
    console.log(`She is left with ${Math.floor(diff)} leva.`);
  } else {
    console.log(`She will have to borrow ${Math.ceil(Math.abs(diff))} leva.`);
  }
}
flowerShop([15, 7, 5, 10, 100]);

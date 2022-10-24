function suppliesForSchool(input) {
  let penCount = Number(input[0]);
  let markerCount = Number(input[1]);
  let detergent = Number(input[2]);
  let discount = Number(input[3]);

  let penPrice = 5.8;
  let markerprice = 7.2;
  let detergentPrice = 1.2;

  let sum =
    penCount * penPrice +
    markerCount * markerprice +
    detergent * detergentPrice;
  let totalSum = sum - sum * (discount / 100);

  console.log(totalSum);
}
suppliesForSchool(["4", "2", "5", "13"]);

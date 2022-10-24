function mobileOperator(input) {
  let contractTime = input[0];
  let type = input[1];
  let internet = input[2];
  let monthCount = Number(input[3]);

  let sum = 0;

  switch (contractTime) {
    case "one":
      if (type === "Small" && internet === "yes") {
        sum = (9.98 + 5.5) * monthCount;
      } else if (type === "Middle" && internet === "yes") {
        sum = (18.99 + 4.35) * monthCount;
      } else if (type === "Large" && internet === "yes") {
        sum = (25.98 + 4.35) * monthCount;
      } else if (type === "ExtraLarge" && internet === "yes") {
        sum = (35.99 + 3.85) * monthCount;
      }
      if (type === "Small" && internet === "no") {
        sum = 9.98 * monthCount;
      } else if (type === "Middle" && internet === "no") {
        sum = 18.99 * monthCount;
      } else if (type === "Large" && internet === "no") {
        sum = 25.98 * monthCount;
      } else if (type === "ExtraLarge" && internet === "no") {
        sum = 35.99 * monthCount;
      }
      
      break;

    case "two":
      if (type === "Small" && internet === "yes") {
        sum = (8.58 + 5.5) * monthCount;
      } else if (type === "Middle" && internet === "yes") {
        sum = (17.09 + 4.35) * monthCount;
      } else if (type === "Large" && internet === "yes") {
        sum = (23.59 + 4.35) * monthCount;
      } else if (type === "ExtraLarge" && internet === "yes") {
        sum = (31.79 + 3.85) * monthCount;
      }
      if (type === "Small" && internet === "no") {
        sum = 8.58 * monthCount;
      } else if (type === "Middle" && internet === "no") {
        sum = 17.09 * monthCount;
      } else if (type === "Large" && internet === "no") {
        sum = 23.59 * monthCount;
      } else if (type === "ExtraLarge" && internet === "no") {
        sum = 31.79 * monthCount;
      }
      break;
  }

  if (contractTime === "two") {
    sum = sum - (sum * 0.0375);
  }
  console.log(`${sum.toFixed(2)} lv.`);
}
mobileOperator(["two",
"ExtraLarge",
"yes",
"20"])




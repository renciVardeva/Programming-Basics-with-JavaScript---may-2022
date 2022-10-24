function grandpaStavri(input) {
  let days = Number(input.shift());
  let totalLitres = 0;
  let AVGGradus = 0;

  for (let i = 0; i < days; i++) {
    let litres = Number(input.shift());
    let gradus = Number(input.shift());
    totalLitres += litres;
    AVGGradus += litres * gradus;
  }
  let totalGr = AVGGradus / totalLitres

  console.log(`Liter: ${totalLitres.toFixed(2)}`);
  console.log(`Degrees: ${(totalGr).toFixed(2)}`);
  if (totalGr < 38) {
    console.log("Not good, you should baking!");
  } else if (totalGr >= 38 && totalGr <= 42) {
    console.log("Super!");
  } else if (totalGr > 42) {
    console.log("Dilution with distilled water!");
  }
}
grandpaStavri(["2", "200", "43", "200", "40"]);

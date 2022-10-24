function fuelTank2(input){

    let fuelType = String (input[0]);
    let litres = Number (input[1]);
    let clubCard = String (input[2]);

    let totalCoast = 0;

   if (fuelType == "Gasoline" || "Diesel" || "Gas"){
       if (clubCard == "Yes"){
           discountG = (2.22 - 0.18) * litres;
           discountD = (2.33 - 0.12) * litres;
           discountGas = (0.93 - 0.08) * litres;
           if (litres >= 20 && litres <= 25){
               extraDisG = discountG * 0.92;
               extraDisD = discountD * 0.92;
               extaDisGas = discountGas * 0.92;
               console.log(`${extraDisGas} lv.`);
           } else if (litres > 25);
           extraDisG = discountG * 0.90;
           extraDisD = discountD * 0.90;
           extraDisGas = discountGas * 0.90;
           console.log(`${extraDisGas} lv.`);
       }
   }
}
fuelTank2(["Gas",
    "30",
    "Yes"
    ])
function fuelTank2(input){

    let fuelType = String (input[0]);
    let litres = Number (input[1]);
    let clubCard = String (input[2]);

   if ((fuelType == "Gasoline" || fuelType == "Diesel" || fuelType == "Gas") && clubCard == "yes"){
           discountG = 2.22 - 0.18;
           discountD = 2.33 - 0.12;
           discountGas = 0.93 - 0.08;
           if (litres >= 20 && litres <= 25){
               extraDisG = (discountG * litres) * 0.08;
               extraDisD = (discountD * litres) * 0.08;
               extaDisGas = (discountGas * litres) * 0.08;
               console.log(extraDisG || extraDisD || extraDisGas);
           } else if (litres > 25);
           extraDisG = (discountG * litres) * 0.10;
           extraDisD = (discountD * litres) * 0.10;
           extraDisGas = (discountGas * litres) * 0.10;
           console.log(extraDisG || extraDisD || extraDisGas);
       }
   }

fuelTank2(["Gas",
    "30",
    "Yes"
    ])
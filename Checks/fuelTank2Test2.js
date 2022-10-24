function fuelTank2(input){

    let fuelType = String (input[0]);
    let litres = Number (input[1]);
    let clubCard = String (input[2]);

    let totalCoast = 0;

   if (fuelType == "Gasoline" || "Diesel" || "Gas"){
       if (clubCard == "Yes"){
           gasolinePrice = 2.22 - 0.18;
           dieselPrice = 2.33 - 0.12;
           gasPrice = 0.93 - 0.08; 
           totalCoast = gasolinePrice * litres;
           totalCoast = dieselPrice * litres;
           totalCoast = gasPrice * litres;
           if (litres >= 20 && litres <= 25){
               totalCoast -= totalCoast * 0.08;
               
               console.log(`${totalCoast.toFixed(2)} lv.`);
           } else if (litres > 25);
           totalCoast -= totalCoast * 0.10;
           
           console.log(`${totalCoast.toFixed(2)} lv.`);
       }
   }
}
fuelTank2(["Gasoline",
    "25",
    "No"
    
    ])
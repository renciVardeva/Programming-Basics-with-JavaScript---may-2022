function coffeeMachine(input){
    let drinkType = input[0];
    let sugarType = input[1];
    let drinksCount = Number (input[2]);

    let price = 0;

    switch (drinkType){
        case "Espresso":
            if (sugarType === "Normal"){
                price = drinksCount * 1;
            } else if (sugarType === "Extra"){
                price = drinksCount * 1.20;
            } else {
                price = (drinksCount * 0.90) * 0.65;

            
                
                // if (drinksCount > 5){
                //     price = price - (price * 25 / 100);
                    
                // }
               
            }
            if (drinksCount > 5){
                price = price - (price * 25 / 100);
                
            }
            break;
        case "Cappuccino":
            if (sugarType === "Normal"){
                price = drinksCount * 1.20;
            } else if (sugarType === "Extra"){
                price = drinksCount * 1.60;
            } else {
                price = (drinksCount * 1) * 0.65;
            }
            break;
        case "Tea":
            if (sugarType === "Normal"){
                price = drinksCount * 0.60;
            } else if (sugarType === "Extra"){
                price = drinksCount * 0.70;
            } else {
                price = (drinksCount * 0.50) * 0.65; 
            }
            break;
            
    }
    if (price > 15){
        price = price - (price * 20 / 100);
    }
    
    console.log(`You bought ${drinksCount} cups of ${drinkType} for ${price.toFixed(2)} lv.`);


}
coffeeMachine(["Espresso",
"Without",
"10"])


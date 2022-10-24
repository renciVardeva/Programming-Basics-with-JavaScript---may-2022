function aluminumJoinery(input){
    let joineryCount = Number (input[0]);
    let type = (input[1]);
    let delivery = (input[2]);

    let price = 0;
    

    if (joineryCount < 10){
        console.log("Invalid order");
    } else if (type =="90X130" || type == "100X150" 
            || type==  "130X180" || type == "200X300"){
                
                if (type == "90X130"){
                    price = 110;
                    if (joineryCount > 30 && joineryCount <=60){
                        price *= 0.95;
                    } else if (joineryCount > 60 ){
                        price *= 0.92;
                    }
                } else if (type == "100X150"){
                    price = 140;
                    if (joineryCount >= 40 && joineryCount <= 80){
                        price *= 0.94;
                    } else if (joineryCount > 80){
                        price *= 0.90;
                    }
                } else if (type == "130X180"){
                    price = 190;
                    if (joineryCount >= 20 && joineryCount <= 50){
                        price *= 0.93;
                    } else if (joineryCount > 50){
                        price *= 0.88;
                    }
                } else if (type == "200X300"){
                    price = 250;
                    if (joineryCount >= 25 && joineryCount <= 50){
                        price *= 0.91;
                    } else if (joineryCount > 50){
                        price *= 0.86;
                    }
                }
                price *= joineryCount;
                if (delivery == "With delivery"){
                    price = price + 60;
                }
                if (joineryCount > 99){
                    price *= 0.96;
                }
                console.log(`${price.toFixed(2)} BGN`);
            }
}
aluminumJoinery(["2",
"130X180",
"With delivery"])




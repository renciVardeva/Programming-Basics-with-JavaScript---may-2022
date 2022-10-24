function newHouse(input){
    let fType = (input[0]);
    let fCount = Number (input[1]);
    let budget = Number (input[2]);
    let price = 0;
    
    

    switch (fType){
        case "Roses":
            price = 5;
            if (fCount > 80){
                price *= 0.90;
            }
            break;
        case "Dahlias":
            price = 3.80;
            if (fCount > 90){
                price *= 0.85;
            }
            break;
        case "Tulips":
            price = 2.80;
            if (fCount > 80){
                price *= 0.85;
            }
            break;
        case "Narcissus":
            price = 3;
            if (fCount < 120){
                price *= 1.15;
            }
            break;
        case "Gladiolus":
            price = 2.50;
            if (fCount < 80){
                price *= 1.20;
            }
            break;
            
            
            
    }
    let totalPrice = fCount * price;
    let diff = Math.abs(budget - totalPrice)
    if (budget >= totalPrice){
        
        console.log(`Hey, you have a great garden with ${fCount} ${fType} and ${diff.toFixed(2)} leva left.`);
    } else if (budget < totalPrice){
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
    
}
newHouse(["Narcissus", "119", "360"])
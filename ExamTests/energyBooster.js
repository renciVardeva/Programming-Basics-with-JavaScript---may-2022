function energyBooster(input){

    let fruit = (input[0]);
    let setSize = (input[1]);
    let setCoun = Number (input[2]);

    let fruitPrice = 0;
    let sizeNumber = 0;
    let discount1 = 0.85;
    let discount2 = 0.50
    

    if (fruit == "Watermelon"){
        if (setSize == "small"){
            sizeNumber = 2;
            fruitPrice = 56;
        } else if (setSize == "big"){
            sizeNumber = 5;
            fruitPrice = 28.70;
        } else if (fruit == "Mango"){
            if (setSize == "small"){
                sizeNumber = 2
                fruitPrice =36.66;
            }
        }
    } 
        
        
    
        
}
energyBooster(["Watermelon",
"big",
"4"])

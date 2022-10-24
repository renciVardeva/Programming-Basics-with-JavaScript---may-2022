function energyBooster(input){
    let fruit = (input[0]);
    let setSize = (input[1]);
    let setCount = Number (input[2]);

    let fruitPrice = 0;
    let sizeNumber = 0;

    if (fruit == "Watermelon" && setSize == "small"){
        sizeNumber = 2;
        fruitPrice = 56;
    } else if (fruit == "Watermelon" && setSize == "big"){
        sizeNumber = 5;
        fruitPrice = 28.70;
    } else if (fruit == "Mango" && setSize == "small"){
        sizeNumber = 2;
        fruitPrice = 36.66;
    } else if (fruit == "Mango" && setSize == "big"){
        sizeNumber = 5;
        fruitPrice = 19.60;
    } else if (fruit == "Pineapple" && setSize == "small"){
        sizeNumber = 2;
        fruitPrice = 42.10;
    } else if (fruit == "Pineapple" && setSize == "big"){
        sizeNumber = 5;
        fruitPrice = 24.80;
    } else if (fruit == "Raspberry" && setSize == "small"){
        sizeNumber = 2;
        fruitPrice = 20;
    } else if (fruit == "Raspberry" && setSize == "big"){
        sizeNumber = 5;
        fruitPrice = 15.20;
    } let totalPrice = sizeNumber * fruitPrice * setCount;
    if (totalPrice >= 400 && totalPrice <= 1000){
        totalPrice *= 0.85;
    } else if (totalPrice > 1000){
        totalPrice *= 0.50
    }
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
energyBooster(["Watermelon",
"big",
"4"])







    
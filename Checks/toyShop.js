function toyShop(input){

    let exPrice = Number (input[0]);
    let puzzleCount = Number (input[1]);
    let dollCount = Number (input[2]);
    let bearCount = Number (input[3]);
    let minCount = Number (input[4]);
    let truckCount = Number (input[5]);
    

    

    let toysOrder = puzzleCount + dollCount + bearCount + minCount + truckCount;
    let totalMoney = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minCount * 8.20 + truckCount * 2;

    if (toysOrder >= 50){
        totalMoney = totalMoney * 0.75;
    }
    totalMoney = totalMoney * 0.90;
    let savings = Math.abs(totalMoney - exPrice)

    if (totalMoney >= exPrice){
        console.log(`Yes! ${savings.toFixed(2)} lv left.`);
    }else {
        console.log(`Not enough money! ${savings.toFixed(2)} lv needed.`);
    }

}
toyShop(["320", "8", "2", "5", "5", "1"])
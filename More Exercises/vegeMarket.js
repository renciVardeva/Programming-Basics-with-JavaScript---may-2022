function vegeMarket(input){

    let vegeKiloPrice = Number (input[0]);
    let fruitKiloPrice = Number (input[1]);
    let totalKiloVege = Number (input[2]);
    let totalKiloFruit = Number (input[3])

    let totalVegePrice = vegeKiloPrice * totalKiloVege;
    let totalFruitPrice = fruitKiloPrice * totalKiloFruit;

    let totalIncom = (totalVegePrice + totalFruitPrice) / 1.94;
    let exTotalIncom = totalIncom.toFixed(2);

    console.log(exTotalIncom)
}
vegeMarket(["0.194", "19.4", "10", "10"])
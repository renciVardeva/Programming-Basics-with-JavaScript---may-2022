function fishLand(input){

    let mackerelKiloPrice = Number (input[0]);
    let spratKiloPrice = Number (input[1]);
    let bonitoKiloAmount = Number (input[2]);
    let scadKiloAmount = Number (input[3]);
    let clamKiloAmount = Number (input[4]);

    let bonitoKiloPrice = mackerelKiloPrice + mackerelKiloPrice * 0.60;
    let bonitoTotal = bonitoKiloAmount * bonitoKiloPrice;

    let scadKiloPrice = spratKiloPrice + spratKiloPrice * 0.80;
    let scadTotal = scadKiloAmount * scadKiloPrice;
    let clamTotal = clamKiloAmount * 7.50;

    let totalSum = bonitoTotal + scadTotal + clamTotal;
    let exTotalSum = totalSum.toFixed(2);

    console.log(exTotalSum);
}

fishLand(["7.79", "5.35", "9.3", "0", "0"])
function transportPrice(input) {
    let kmCount = Number(input[0]);
    let dayOrNight = input[1];

    let taxiPriceD = kmCount * 0.79 + 0.7;
    let taxiPriceN = kmCount * 0.9 + 0.7;
    let busPrice = kmCount * 0.09;
    let trainPrice = kmCount * 0.06;

    if (kmCount < 20 && dayOrNight === "day") {
        console.log(`${taxiPriceD.toFixed(2)}`);
    } else if (kmCount < 20 && dayOrNight === "night") {
        console.log(`${taxiPriceN.toFixed(2)}`);
    } else if (kmCount >= 100) {
        console.log(`${trainPrice.toFixed(2)}`);
    } else if (kmCount >= 20) {
        console.log(`${busPrice.toFixed(2)}`);
    }
}
transportPrice(["7", "night"]);
function poolDay(input){
    let peopleCount = Number (input[0]);
    let entryTax = Number (input[1]);
    let bedPrice = Number (input[2]);
    let umbrellaPrice = Number (input[3]);

    let totalTax = peopleCount * entryTax;
    let totalBedPrice = Math.ceil(peopleCount * 0.75) * bedPrice;
    let totalUmbrellaPrice = Math.ceil(peopleCount / 2) * umbrellaPrice;
    let sum = totalTax + totalUmbrellaPrice + totalBedPrice;

    console.log(`${sum.toFixed(2)} lv.`);
}
poolDay(["100",
"8",
"6",
"4"])
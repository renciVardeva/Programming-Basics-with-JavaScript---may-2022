function maidenParty(input){

    let partyPrice = Number (input[0]);
    let loveLettersCount = Number (input[1]);
    let rosesCount = Number (input[2]);
    let keysCount = Number (input[3]);
    let funnyPicturesCount = Number (input[4]);
    let suprisesCount = Number (input[5]);

    let totalOrder = loveLettersCount + rosesCount + keysCount + funnyPicturesCount + suprisesCount;
    let totalSale = loveLettersCount * 0.60 + rosesCount * 7.20 + keysCount * 3.60 + funnyPicturesCount * 18.20 + suprisesCount * 22;

    if (totalOrder >= 25){
        totalSale =totalSale * 0.65;
    }
    totalSale = totalSale * 0.90;
    let savings = Math.abs(totalSale - partyPrice);

    if (totalSale >= partyPrice){
        console.log(`Yes! ${savings.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${savings.toFixed(2)} lv needed.`);
    }

}
maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])

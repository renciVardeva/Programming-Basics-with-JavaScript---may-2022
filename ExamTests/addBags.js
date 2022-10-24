function addBags (input){
    let bags20Price = Number (input[0]);
    let bagsKilo = Number (input[1]);
    let days = Number (input[2]);
    let bagsCount = Number (input[3]);

    let bagsPrice = 0;

    if (bagsKilo < 10){
        bagsPrice = bags20Price * 0.20;
    } else if (bagsKilo >= 10 && bagsKilo <= 20){
        bagsPrice = bags20Price * 0.50;
    } else if (bagsKilo > 20){
        bagsPrice = bags20Price
    }
    if (days > 30){
        bagsPrice *= 1.10;
    } else if (days >= 7 && days <= 30){
        bagsPrice *= 1.15 ;
    } else if ( days < 7){
        bagsPrice *= 1.40;
    }
    let totalPrice = bagsPrice * bagsCount
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);

     
}
addBags(["25.50",
"5",
"36",
"6"])





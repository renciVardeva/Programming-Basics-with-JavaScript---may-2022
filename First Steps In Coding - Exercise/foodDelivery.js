function foodDelivery(input){

    let chiken = Number (input[0]) * 10.35;
    let fish =  Number (input[1]) * 12.40;
    let vegi = Number (input[2]) * 8.15;

    let SumAll = chiken + fish + vegi;
    let dessert = SumAll * 0.20;
    let delivery = 2.50;

    totalAmount = SumAll + dessert + delivery;

    console.log(totalAmount);
}
foodDelivery(["9", "2", "6"])
function godzillaVsKong(input){

    let budget = Number (input[0]);
    let extraCount = Number (input[1]);
    let costumePrice = Number (input[2]);

    let decor = budget * 0.10;
    let costumeTotal = costumePrice * extraCount;

    if (extraCount >= 150){
        costumeTotal = costumeTotal * 0.90;
    }
    let totalMoney = costumeTotal + decor;
    let diff = Math.abs(budget - totalMoney);
    if (totalMoney > budget ){
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88",

"222",

"55.68"])
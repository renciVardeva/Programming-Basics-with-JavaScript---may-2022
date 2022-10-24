function coins(input){
    let coinsInLv = Number (input[0]);
    let coins = Math.floor(coinsInLv * 100);

    let coinsCount = 0;

    while (coins > 0){
        coinsCount++
        if (coins >= 200){
            coins -= 200;
        } else if (coins >= 100){
            coins -= 100;
        } else if (coins >= 50){
            coins -= 50;
        } else if (coins >= 20){
            coins -= 20;
        } else if (coins >= 10){
            coins -= 10;
        } else if (coins >= 5){
            coins -= 5;
        } else if (coins >= 2){
            coins -= 2;
        } else {
            coins -= 1;
        }
    }
    console.log(coinsCount);

}
coins(["0.56"])
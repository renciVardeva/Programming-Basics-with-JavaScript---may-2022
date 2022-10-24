function bonusPoints(input){

    let num = Number (input[0]);
    let bonus = 0.0;
    let score = num + bonus

    if (score <= 100){
        bonus = 5;
    }else if (score > 1000){
        bonus = num * 0.10;
    }else if (score >= 100){
        bonus = num * 0.20;
    }
    if (score % 2 == 0){
        bonus += 1;
    }else if (score % 10 == 5){
        bonus += 2;
        
    }
        console.log(bonus);
        console.log(score + bonus);
}
bonusPoints(["15875"])
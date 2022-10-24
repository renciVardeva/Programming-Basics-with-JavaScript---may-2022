function timePlus15Minutes(input){

    let hours = Number (input[0]);
    let minutes = Number (input[1]);

    let time = hours * 60 + minutes +15;

    let sumHours = Math.floor(time / 60);
    let sumMinutes = time % 60;

    if(sumHours > 23){
        sumHours = 0;

    }
     if (sumMinutes < 10){
        console.log(`${sumHours}:0${sumMinutes}`);

    }else {
        console.log(`${sumHours}:${sumMinutes}`);
    }
}
timePlus15Minutes(["12", "49"])
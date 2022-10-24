function lunchBreak(input){

    let filmName = String (input[0]);
    let filmTime = Number (input[1]);
    let breakTime = Number (input[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let freeTime = breakTime - lunchTime - restTime;
    let diff = Math.abs(freeTime - filmTime);

    if (freeTime >= filmTime){
        console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        
        console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil(diff)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones",

"60",

"96"])
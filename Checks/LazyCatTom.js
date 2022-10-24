function lazyCatTom(input){

    let holidays = Number (input[0]);
    let workingDays = 365 - holidays;
    let totalPlayTime = workingDays * 63 + holidays * 127;
    let diff = Math.abs(totalPlayTime - 30000);
    let H = diff / 60;
    let M = diff % 60;

    


    if (totalPlayTime > 30000){
        console.log(`Tom will run away`);
        console.log(`${Math.floor(H)} hours and ${Math.floor(M)} minutes more for play`);
        
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${Math.floor(H)} hours and ${Math.floor(M)} minutes less for play`);
    }
}
lazyCatTom(["20"])
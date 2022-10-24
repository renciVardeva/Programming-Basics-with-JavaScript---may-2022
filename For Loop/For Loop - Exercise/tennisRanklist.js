function tennisRanklist(input){
    let index = 0;
    let num = Number (input[index]);
    index++;
    let startPoints = Number (input[index]);
    index++;

    let tempPoints = 0;
    let wCount = 0;


    for (let a = 0; a < num; a++){
        let result = input[index];
        index++;
         if (result === "W"){
             tempPoints += 2000;
             wCount++
         } else if (result === "F"){
             tempPoints += 1200;
         } else {
             tempPoints += 720;
         }

    }
    let avPoints = Math.floor(tempPoints / num);
    let finalPoints = tempPoints + startPoints;
    let winP = wCount / num * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avPoints}`);
    console.log(`${winP.toFixed(2)}%`);
}
tennisRanklist(["4",

"750",

"SF",

"W",

"SF",

"W"])
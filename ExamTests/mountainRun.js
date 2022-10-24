function mountainRun(input){
    let recordInSeconds = Number (input[0]);
    let distanceInMeters = Number (input[1]);
    let timeInSecPerMeter = Number (input[2]);

    let time = distanceInMeters * timeInSecPerMeter;
    let delay = Math.floor(distanceInMeters / 50) * 30;

    let totalTime = time + delay;

    if (totalTime < recordInSeconds){
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let diff = Math.abs(totalTime - recordInSeconds);
        console.log(`No! He was ${(diff).toFixed(2)} seconds slower.`);
    }

}
mountainRun(["1377",
    "389",
    "3"
    ])
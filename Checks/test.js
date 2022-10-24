function worldSwimmingRecord(input){

    let worldRecordSeconds = Number (input[0]);
    let distanceInMeters = Number (input[1]);
    let timeInseconds = Number (input[2]);

    let time = distanceInMeters * timeInseconds;
    let delay = Math.floor(distanceInMeters / 15) * 12.5;

    let totalTime = time + delay;
    console.log(totalTime);
}
worldSwimmingRecord(["10464",

"1500",

"20"])

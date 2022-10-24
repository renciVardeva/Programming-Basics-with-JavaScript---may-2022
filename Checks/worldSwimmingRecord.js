function worldSwimmingRecord(input){

    let worldRecordSeconds = Number (input[0]);
    let distanceInMeters = Number (input[1]);
    let timeInseconds = Number (input[2]);

    let time = distanceInMeters * timeInseconds;
    let delay = Math.floor(distanceInMeters / 15) * 12.5

    let totalTime = time + delay;

    if (totalTime < worldRecordSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else{
        let difference = Math.abs(totalTime - worldRecordSeconds);
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",

"3017", "5.03"])
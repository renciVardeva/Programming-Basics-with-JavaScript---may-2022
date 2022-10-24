function onTimeForTheExam(input){
    let hourExam = Number (input[0]);
    let minutesExam = Number (input[1]);
    let hourArrive = Number (input[2]);
    let minutesArrive = Number (input[3]);

    let timeExam = hourExam * 60 + minutesExam;
    let timeArrive = hourArrive * 60 + minutesArrive;
    let diff = Math.abs(timeArrive - timeExam);
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;

    if (timeExam < timeArrive){
        console.log("Late");
        if (diff >= 60){
            if (minutes < 10){
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        } else {
            console.log(`${minutes} minutes after the start`);
        }
    } else if ( timeArrive === timeExam || timeExam - timeArrive <= 30){
        console.log("On time");
        if (diff > 0){
            console.log(`${minutes} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (hours > 0){
            if (minutes < 10){
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        } else {
            console.log(`${minutes} minutes before the start`);
        }
    }
}
onTimeForTheExam(["11", "30", "10", "55"])
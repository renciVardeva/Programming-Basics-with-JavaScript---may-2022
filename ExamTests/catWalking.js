function catWalking(input){
    let minutesPerDay = Number (input[0]);
    let walksPerDay = Number (input[1]);
    let caloriesPerDay = Number (input[2]);

    let totalTime = walksPerDay * minutesPerDay;
    let lostCalories = totalTime * 5;

    if (lostCalories >= caloriesPerDay * 0.5){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${lostCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${lostCalories}.`);
    }
}
catWalking(["30",
    "3",
    "600"
    ])
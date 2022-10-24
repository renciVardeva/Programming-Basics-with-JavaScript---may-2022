function walking (input){
    let index = 0;
    let target = 10000;
    let command = input[index ++];
    let steps = 0;

    while (command !== "Going home"){
        let temSteps = Number (command);
        steps += temSteps;

        if (steps >= target){
            break;
        }
        command = input[index++];
    }
    
    if (command === "Going home"){
        let temSteps = Number (input[index++]);
        steps += temSteps;

    }
    let diff = Math.abs(target - steps);
    if (target <= steps){
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}
walking(["1500", "300", "2500", "3000", "Going home", "200"])
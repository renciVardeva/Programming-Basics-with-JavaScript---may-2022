function trainTheTrainers(input){
    let index = 0;
    let people = Number (input[index++]);
    let command = input[index++];
    let sumGrade = 0;
    let presentationCount = 0;

    // let presentstionName = input[index++];
    // let grade = Number (input[index++]);

    while (command !== "Finish"){
        let presentstionName = command;
        let tempGradeSum = 0;
        presentationCount++
        for (let a = 0; a < people; a++){
            let grade = Number (input[index++]);
            tempGradeSum += grade
            
        } 
        let tempAVG = tempGradeSum / people;
        sumGrade += tempAVG;
        console.log(`${presentstionName} - ${tempAVG.toFixed(2)}.`);
        command = input[index++];
    }
    let totalAVG = sumGrade / presentationCount;
    console.log(`Student's final assessment is ${totalAVG.toFixed(2)}.`);


}
trainTheTrainers(["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"])
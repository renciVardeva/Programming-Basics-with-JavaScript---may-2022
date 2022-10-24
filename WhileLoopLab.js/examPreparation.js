function examPreparation(input){
    let index = 0;
    let badGradeNum = Number (input[index++]);
    let command = input[index++]

    let taskCount = 0;
    let badGradeCount = 0;
    let taskName = "";
    let sumGrade = 0;

    while (command !== "Enough"){
        taskName = command;
        let grade = Number (input[index++]);
        

        if (grade <= 4){
            badGradeCount++;
        }
        if (badGradeCount === badGradeNum){
            console.log(`You need a break, ${badGradeCount} poor grades.`);
            break;
        } 
        sumGrade += grade;
        taskCount++;

        command = input[index++]
    }
    let avgGrade = sumGrade / taskCount;
    
    if (command === "Enough"){
        
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${taskCount}`);
        console.log(`Last problem: ${taskName}`);

    }

}
examPreparation(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])
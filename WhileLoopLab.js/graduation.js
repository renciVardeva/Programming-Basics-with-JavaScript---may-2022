function graduation(input) {
  let index = 0;
  let name = input[index++];

  let classCounter = 1;
  let badGradeCounter = 0;
  let sumGrade = 0;

  while (classCounter <= 12) {
    let grade = Number(input[index++]);

    if (grade >= 4.0) {
      sumGrade += grade;
      classCounter++;
    }

    if (grade < 4.0) {
      badGradeCounter++;
    }
    if (badGradeCounter > 1) {
      console.log(`${name} has been excluded at ${classCounter} grade`);
      break;
    }
    continue;
  }

  if (badGradeCounter < 2) {
    let avgGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
  }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

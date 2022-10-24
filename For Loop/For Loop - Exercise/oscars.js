function oscars(input){
    let index = 0;
    let actorName = input[index];
    index++;
    let points = Number (input[index]);
    index++;
    let juryCount = Number (input[index]);
    index++;

    for ( let a = 0; a < juryCount; a++){
        let currentName = input[index];
        index++;
        let currentPoints = Number (input[index]);
        index++;

        let sum = currentName.length * currentPoints / 2;
        points += sum

        if ( points > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }
    let diff = Math.abs(points - 1250.5);
    if (points <= 1250.5){
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])
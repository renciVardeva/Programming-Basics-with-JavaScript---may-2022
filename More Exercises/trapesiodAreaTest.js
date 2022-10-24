function trapeziodArea(input){

    let baseB1 = Number (input[0]);
    let baseB2 = Number (input[1]);
    let heightH = Number (input[2]);
    

    let trapeziodAreaSum = (baseB1 + baseB2) * heightH / 2;
    let exTrapeziodAreaSum = trapeziodAreaSum.toFixed(2);

    console.log(exTrapeziodAreaSum);
}
trapeziodArea(["8", "13", "7"])
function trapeziodArea(input){

    let baseB1 = Number (input[0]);
    let exBaseB1 = baseB1.toFixed(2);
    let baseB2 = Number (input[1]);
    let exBaseB2 = baseB2.toFixed(2);
    let heightH = Number (input[2]);
    let exHeightH = heightH.toFixed(2);

    let trapeziodAreaSum = (baseB1 + baseB2) * heightH / 2;
    let exTrapeziodAreaSum = trapeziodAreaSum.toFixed(2);

    console.log(exTrapeziodAreaSum);
}
trapeziodArea(["8", "13", "7"])
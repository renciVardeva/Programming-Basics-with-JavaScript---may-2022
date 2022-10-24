function sumOfTwoNumbers(input){
    let startNum = Number (input[0]);
    let endNum = Number (input[1]);
    let magicNum = Number (input[2]);
    let combinationCounter = 0;
    let isFound = false
    let numOne = 0;
    let numTwo = 0;

    for (let a = startNum; a <= endNum; a++){
        for (let b = startNum; b <= endNum; b++){
            combinationCounter++
            if (a + b === magicNum){
                numOne = a;
                numTwo = b;
                isFound = true;
                break;
            }
        }
        if (isFound){
            break;
        }
        
    }
    if (isFound){
        console.log(`Combination N:${combinationCounter} (${numOne} + ${numTwo} = ${magicNum})`);
    } else {
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    }
    


}
sumOfTwoNumbers(["23",

"24",

"20"])
function equalSumsEvenOddPosition(input){
    let firstNum = Number (input[0]);
    let secondNum = Number (input[1]);
    let print = ``;
    
    for (let a = firstNum; a <= secondNum; a++){
        let currentNum = " " + a;
        let oddSum =0;
        let evenSum = 0;
        for (let b = 0; b <= currentNum.length; b++){
            let currentDig = Number (currentNum.charAt(b));
            if (b % 2 === 0){
                evenSum += currentDig;

            } else {
                oddSum += currentDig;
            }

        }
        if (oddSum === evenSum){
            print += `${a} `
        }
    }
    console.log(print);
}
equalSumsEvenOddPosition(["100000",

"100050"])
function numberPyramid(input){
    let num = Number (input [0]);
    let currentNum = 1;
    let isBigger = false;
    let printLine = "";
    
    for ( let rows = 1; rows <= num; rows++){
        for (let colls = 1; colls <= rows; colls++){
            if (currentNum > num){
                isBigger = true;
                break;
            }
            printLine += currentNum + " ";
            currentNum++
        }
        console.log(printLine);
        printLine = "";
        if (isBigger){
            break;
        }
    }
}
numberPyramid(["7"])
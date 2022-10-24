function numDivisibleBy9(input){
    let start = Number (input[0]);
    let end = Number (input[1]);
    let sum = 0;
    let buff = "";

    for ( let a = start; a <= end; a++){
        if (a % 9 === 0){
            sum = sum + a;
            buff = buff + `${a}\n`
            // buff = buff + a + "\n"
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);
}
numDivisibleBy9(["100", "200"])
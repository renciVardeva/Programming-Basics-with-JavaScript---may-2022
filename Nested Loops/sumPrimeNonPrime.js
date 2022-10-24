function sumPrimeNonPrime(input){
    let index = 0;
    let command = input[index++];

    let primeNum = 0;
    let nonPrimeNum = 0;

    while (command !== "stop"){
        let num = Number (command);
        if ( num < 0){
            console.log("Number is negative.");
            command = input[index++];
            continue;
        }
        if (num === 1){
            primeNum += num;
            command = input[index++];
            continue;
        }
        let isPrime = true;
        for (let a = 2; a < num; a++){
            if (num % a === 0){
                isPrime = false;
            break;
            }
            

        }
        if (isPrime){
            primeNum += num;
        } else {
            nonPrimeNum += num;
        }
        command = input[index++];
    }
    
    
    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);
}
sumPrimeNonPrime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"])
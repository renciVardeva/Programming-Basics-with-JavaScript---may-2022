function sumOfNumbers(input){
    let n = input[0];
    let sum = 0;

    for ( let a = 0; a < n.length; a++){
        let number = Number(n[a]);
        sum = sum + number;
        
        
    }
    console.log(`The sum of the digits is:${sum}`);
    
}
sumOfNumbers(["564891"])
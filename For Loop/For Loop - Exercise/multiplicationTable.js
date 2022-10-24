function multiplicationTable(input){
    let num = Number (input[0]);

    for ( let a = 1; a <= 10; a++){
        let sum = a * num;
        console.log(`${a} * ${num} = ${sum}`);
    }
}
multiplicationTable(["5"])
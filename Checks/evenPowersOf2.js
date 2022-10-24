function evenPowersOf2(input){
    let num = Number (input[0]);
    

    for (a = 0; a <= num; a++){
        if (a % 2 == 0) {
            console.log(Math.pow(2,a));
        }
        
    }
}
evenPowersOf2(["4"])
function guessPassword(input){

    let password = String(input[0]);
    let truePaswword = "s3cr3t!P@ssw0rd"

    if(password === truePaswword){
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
guessPassword(["s3cr3t!p@ss"])
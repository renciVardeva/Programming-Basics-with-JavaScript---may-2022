function minNumber1(input){
    let index = 0;
    let command = input[index];
    index ++

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop"){
        let num = Number(command);
        

        if (minNumber > num){
            minNumber = num;

        }
        command = input[index];
        index++
    }
    console.log(minNumber);
}
minNumber1(["-10", "20", "-30", "Stop"])
function accountBalance(input){
    let index = 0;
    let total = 0;
    let command = (input[index]);
    index++
    

    while (command !== "NoMoreMoney"){
        let money = Number (command);

        if (money < 0){
            console.log("Invalid operation!");
            break;
        }
        total += money;
        console.log(`Increase: ${money.toFixed(2)}`);
        command = input[index];
        index++
        

    }
    console.log(`Total: ${total.toFixed(2)}`);

}
accountBalance(["120", "45.55", "-150"])
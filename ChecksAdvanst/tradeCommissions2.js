function tradeCommissions2(input){
    let town = (input[0]);
    let sales = Number (input[1]);
    

    if (sales <= 0 && sales >= 500){
        if (town == "Sofia"){
            console.log(((sales * 4.5) / 100).toFixed(2));
        } else if (town == "Varna"){
            console.log(((sales * 4.5) / 100).toFixed(2));
        } else if (town == "Plovdiv"){
            console.log(((sales * 5.5) / 100).toFixed(2));
        }
    }
}
tradeCommissions2(["Sofia", "499.99"])

    
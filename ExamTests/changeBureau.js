function changeBureau(input){
    let bitcoin = Number (input[0]);
    let yuan= Number (input[1]);
    let commission = Number (input[2]);
    
    commission = commission * 0.01

    let alleuro = (yuan * 0.15 * 1.76 + bitcoin * 1168) / 1.95
    let charge = alleuro * commission
    let result = alleuro - charge
    console.log(result.toFixed(2))

    
}
changeBureau(["20", "5678", "2.4"])
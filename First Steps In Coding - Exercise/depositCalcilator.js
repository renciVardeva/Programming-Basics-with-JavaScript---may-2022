function depositCalculator(input){
    let depositAmount = Number (input[0]);
    let depositTerm = Number (input[1]);
    let annualinterestRate = Number (input[2]);

    let yearInterestRate = depositAmount * (annualinterestRate / 100);
    let monthInterestRate = yearInterestRate / 12;
    let final = monthInterestRate * depositTerm + depositAmount;

    console.log(final);
}
depositCalculator(["2350", "6", "7"])
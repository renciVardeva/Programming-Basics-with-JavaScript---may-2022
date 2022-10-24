function shopping(input){

    let budget = Number (input[0]);
    let videoCardCount = Number (input[1]);
    let processorCount = Number (input[2]);
    let ramCount = Number (input[3]);
    
    let videoCardPrice = videoCardCount * 250;
    let processorPrice = videoCardPrice * 0.35;
    let ramPrice = videoCardPrice * 0.10;
    let finalPrice = videoCardPrice + (processorCount * processorPrice) + (ramCount * ramPrice);
    

    if (videoCardCount > processorCount){
        finalPrice = finalPrice - (finalPrice * 0.15);
    }
    if (finalPrice <= budget){
        let leftBudget = budget - finalPrice;
        console.log(`You have ${leftBudget.toFixed(2)} leva left!`);

    }else {
        let diff = Math.abs(finalPrice - budget);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
        
    
}
shopping(["920.45",

"3",

"1",

"1"])
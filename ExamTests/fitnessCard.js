function fitnessCard(input){
    let totalSum = Number (input[0]);
    let gender = (input[1]);
    let age = Number (input[2]);
    let sport = (input[3]);

    let cardPrice = 0;
    

    if (sport == "Gym" && gender == "m"){
        cardPrice = 42;
    } else if (sport == "Gym" && gender == "f"){
        cardPrice = 35;
    } else if (sport == "Boxing" && gender == "m"){
        cardPrice = 41;
    } else if (sport == "Boxing" && gender == "f"){
        cardPrice = 37;
    } else if (sport == "Yoga" && gender == "m"){
        cardPrice = 45;
    } else if (sport == "Yoga" && gender == "f"){
        cardPrice = 42;
    } else if (sport == "Zumba" && gender == "m"){
        cardPrice = 34;
    } else if (sport == "Zumba" && gender == "f"){
        cardPrice = 31;
    } else if (sport == "Dances" && gender == "m"){
        cardPrice = 51;
    } else if (sport == "Dances" && gender == "f"){
        cardPrice = 53;
    } else if (sport == "Pilates" && gender == "m"){
        cardPrice = 39;
    } else if (sport == "Pilates" && gender == "f"){
        cardPrice = 37;
    }  
    if ( age <= 19){
         cardPrice = cardPrice * 0.80;
    }
    if ( totalSum > cardPrice){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else if (totalSum < cardPrice){
        let diff = cardPrice - totalSum;
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }
     
}
fitnessCard(["10",
"m",
"50",
"Pilates"])






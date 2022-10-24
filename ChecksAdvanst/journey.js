function journey(input){
    let budget = Number (input[0]);
    let season = input[1];
    let price = 0;
    let destinstion;
    let type;

    switch (season){
        case "summer":
            if (budget <= 100){
                price = budget * 0.30;
                destinstion = "Bulgaria";
                type = "Camp"
            } else if (budget <= 1000){
                price = budget * 0.40;
                destinstion = "Balkans";
                type = "Camp"
            } else {
                price = budget * 0.90;
                destinstion = "Europe";
                type = "Hotel"
            }
            break;
        case "winter":
            if (budget <= 100){
                price = budget * 0.70;
                destinstion = "Bulgaria";
                type = "Hotel"
            } else if (budget <= 1000){
                price = budget * 0.80;
                destinstion = "Balkans"
                type = "Hotel"
            } else {
                price = budget * 0.90;
                destinstion = "Europe"
                type = "Hotel"
            }
            break;
    }
    console.log(`Somewhere in ${destinstion}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}
journey(["50", "summer"])
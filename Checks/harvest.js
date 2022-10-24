function harvest(input){

    let vineyardSM = Number (input[0]);
    let harvestPerMeter = Number (input[1]);
    let litresPervine = Number (input[2]);
    let workersCount = Number (input[3]);

    let totalHarvest = vineyardSM * harvestPerMeter;
    let sumForVine = (totalHarvest * 0.40) / 2.5;
    let diff = sumForVine - litresPervine;
    let litPerWork = diff / workersCount;

    if (sumForVine >= litresPervine){
        console.log(`Good harvest this year! Total wine: ${Math.floor(sumForVine)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(litPerWork)} liters per person.`);

    } else {
        let lackOfVine = litresPervine - sumForVine
        console.log(`It will be a tough winter! More ${Math.floor(lackOfVine)} liters wine needed.`);
    }
}
harvest([650,
    2,
    175,
    3
    
    ])
    
function basketBallEquipment(input){

    let annualTrainingTax =  Number (input[0])

    let trainingShoes = annualTrainingTax * 0.60;
    let trainingEquip = trainingShoes * 0.80;
    let trainingBall = trainingEquip * 0.25;
    let accessories = trainingBall * 0.20;

    let totalEquipmentAmount = annualTrainingTax + trainingShoes + trainingEquip + trainingBall + accessories;
     
    console.log(totalEquipmentAmount);
}
basketBallEquipment(["365"])
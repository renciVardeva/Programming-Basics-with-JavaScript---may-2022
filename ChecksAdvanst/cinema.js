function cinema(input){
    let type = input[0];
    let columns = Number (input[1]);
    let rows = Number (input[2]);

    let income = 0;

    switch (type){
        case "Premiere":
            income = columns * rows * 12; break;
        case "Normal":
            income = columns * rows * 7.50; break;
        case "Discount":
            income = columns * rows * 5; break;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"])
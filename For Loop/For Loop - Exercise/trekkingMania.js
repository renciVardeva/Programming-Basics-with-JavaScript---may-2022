function trekkingMania(input){
    let index = 0;
    let groupNum = Number (input[index]);
    index++;
    

    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let peopleCount = 0;

    for (a = 0; a < groupNum; a++){
         let total = Number (input[index]);
         peopleCount += total
         index++;
        
        if (total <= 5){
            musala += total;
        } else if ( total >= 6 && total <= 12){
            montBlanc += total;
        } else if ( total >= 13 && total <= 25){
            kilimanjaro += total;
        } else if ( total >= 26 && total <= 40){
            k2 += total;
        } else {
            everest += total;
        }
       
    }
    let p1 = musala / peopleCount * 100;
    let p2 = montBlanc / peopleCount * 100;
    let p3 = kilimanjaro / peopleCount * 100;
    let p4 = k2 / peopleCount * 100;
    let p5 = everest / peopleCount * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
trekkingMania(["10",

"10",

"5",

"1",

"100",

"12", "26", "17", "37", "40", "78"])
function histogram(input){
    let index = 0;
    let num = Number (input[index]);
    index++;

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5count = 0;

    for ( let a = 0; a < num; a++){
        let currentNum = Number (input[index]);
        index++

        if (currentNum < 200){
            p1Count++
        } else if (currentNum >= 200 && currentNum <= 399){
            p2Count++
        } else if ( currentNum >= 400 && currentNum <= 599){
            p3Count++
        } else if (currentNum >= 600 && currentNum <= 799){
            p4Count++
        } else {
            p5count++
        }
    }
    let p1 = p1Count / num * 100;
    let p2 = p2Count / num * 100;
    let p3 = p3Count / num * 100;
    let p4 = p4Count / num * 100;
    let p5 = p5count / num * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])
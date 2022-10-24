function pipesInPool(input){

    let V = Number (input[0]);
    let P1 = Number (input[1]);
    let P2 = Number (input[2]);
    let H = Number (input[3]);

    let P1LitresPerH = P1 * H;
    let P2LitresPerH = P2 * H;
    let sumLitres = P1LitresPerH + P2LitresPerH;
    let result = (sumLitres / V) * 100;
    let P1Result = (P1LitresPerH / sumLitres) * 100;
    let P2Result = (P2LitresPerH / sumLitres) * 100;
    let diff = sumLitres - V;

    if(sumLitres <= V){
       console.log(`The pool is ${result}% full. Pipe 1: ${P1Result.toFixed(2)}%. Pipe 2: ${P2Result.toFixed(2)}%.`); 
    }else {
        
        console.log(`For ${H} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    }
}
pipesInPool([100,
    100,
    100,
    2.5
    
    
    
])
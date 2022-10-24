function circlePandS([arg1]){

    let r = Number (arg1);

    let S = Math.PI * r * r;
    let exS = S.toFixed(2);

    let P = 2 * Math.PI * r;
    let exP = P.toFixed(2);

    

    console.log(exS);
    console.log(exP);
}
circlePandS(["4.5"])
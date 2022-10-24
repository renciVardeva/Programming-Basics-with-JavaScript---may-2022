function yardGardening (input){
    let squareMeter = (input[0]);
    let totalprice = squareMeter * 7.61;
    let discount = totalprice * 0.18;
    let sum = totalprice - discount

    console.log (`The final price is: ${sum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGardening(["150"])
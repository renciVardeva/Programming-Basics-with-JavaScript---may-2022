function painting(input){
    let nylon = Number (input[0]);
    let paint = Number (input[1]);
    let paintThiner = Number (input[2]);
    let hours = Number (input[3]);
    let bags = 0.40;

    let addNylon = 2;
    let addPaint = paint * 0.10;

    let totalNylon = (nylon + addNylon) * 1.50;
    let totalPaint = (paint + addPaint) * 14.50;
    let totalPaintThiner = paintThiner * 5.00;
    let totalMaterials = totalNylon + totalPaint + totalPaintThiner + bags;
    let totalMasters = (totalMaterials * 0.30) * hours;
    let totalCost = totalMaterials + totalMasters;



    console.log(totalCost);
}
painting(["5", "10", "10", "1"])
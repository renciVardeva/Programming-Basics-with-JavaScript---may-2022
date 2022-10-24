function areaOfFigures(input){

    let figureName = (input[0]);
    let sideA = Number (input[1]);
    let sideB = Number (input[2]);
    
    let squareArea = sideA * sideA;
    let rectangleArea = sideA * sideB;
    let circleArea = Math.PI * sideA * sideA;
    let triangleArea = (sideA * sideB) / 2;

    if (figureName === "square") {
        console.log(squareArea.toFixed(3));

    } else if (figureName === "rectangle") {
        console.log(rectangleArea.toFixed(3));

    } else if (figureName === "circle") {
        console.log(circleArea.toFixed(3));

    } else if (figureName === "triangle") {
        console.log(triangleArea.toFixed(3));
    }

}
areaOfFigures(["triangle", "4.5", "20"])
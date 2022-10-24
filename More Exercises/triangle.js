function triangleArea(input) {
  let triangleLenght = Number(input[0]);
  let triangleHeight = Number(input[1]);

  let areaSum = (triangleLenght * triangleHeight) / 2;
  let exAreaSum = areaSum.toFixed(2);

  console.log(exAreaSum);
}
triangleArea(["1.23456", "4.56789"]);

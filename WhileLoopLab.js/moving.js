function moving(input) {
  let index = 0;
  let w = Number(input[index++]);
  let l = Number(input[index++]);
  let h = Number(input[index++]);
  let freeSpace = w * l * h;
  let command = input[index++];

  while (command !== "Done") {
    let boxes = Number(command);
    freeSpace -= boxes;
    if (freeSpace < 0) {
      console.log(
        `No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`
      );
      break;
    }
    command = input[index++];
  }
  if (freeSpace >= 0) {
    console.log(`${freeSpace} Cubic meters left.`);
  }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);

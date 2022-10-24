function cake(input) {
  let index = 0;
  let w = Number(input[index++]);
  let l = Number(input[index++]);
  let cakeSize = w * l;
  let command = input[index++];

  while (command !== "STOP") {
    let cakePieces = Number(command);
    cakeSize -= cakePieces;
    if (cakeSize < 0) {
      console.log(
        `No more cake left! You need ${Math.abs(cakeSize)} pieces more.`
      );
      break;
    }
    command = input[index++];
  }
  if (cakeSize >= 0) {
    console.log(`${cakeSize} pieces are left.`);
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);

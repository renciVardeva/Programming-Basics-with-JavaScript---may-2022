function oldBooks(input) {
  let myBook = input[0];
  let index = 1;
  let bookName = input[index];

  while (bookName !== "No More Books") {
    if (myBook === bookName) {
      console.log(`You checked ${index - 1} books and found it.`);
      break;
    }

    index++;
    bookName = input[index];
  }
  if (bookName === "No More Books") {
    console.log("The book you search is not here!");
    console.log(`You checked ${index - 1} books.`);
  }
}
oldBooks([
  "Bourne",

  "True Story",

  "Forever",

  "More Space",

  "The Girl",

  "Spaceship",

  "Strongest",

  "Profit",

  "Tripple",

  "Stella",

  "The Matrix",

  "Bourne",
]);

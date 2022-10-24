function excursionSale (input) {
    let seaCount = Number(input.shift());
    let mountCount = Number(input.shift());
    let totalSum = 0;
    while (true) {
        let command = input.shift();
        if (command === "Stop") {
            break;
        }
        if (command === "sea" && seaCount !== 0) {
            totalSum += 680;
            seaCount--;
        } else if (command === "mountain" && mountCount !== 0) {
            totalSum += 499;
            mountCount--;
        }
        if (seaCount === 0 && mountCount === 0) {
            console.log("Good job! Everything is sold.");
            break;
        }
    }
    console.log(`Profit: ${totalSum} leva.`);
}
excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

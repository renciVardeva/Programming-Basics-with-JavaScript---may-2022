function pcStore(input){
    let processorInUSD = Number (input[0]);
    let videoCardInUSD = Number (input[1]);
    let ramInUSD = Number (input[2]);
    let ramCount = Number (input[3]);
    let discount = Number (input[4]);

    let processorInBGN = processorInUSD * 1.57;
    let videoCardInBGN = videoCardInUSD * 1.57;
    let ramInBGN = ramInUSD * 1.57;
    let totalRamPrice = ramCount * ramInBGN;
    let processorTotalPrice = processorInBGN - (processorInBGN * discount);
    let videoCardTotalPrice = videoCardInBGN - (videoCardInBGN * discount);
    
    let totalMoney = totalRamPrice + processorTotalPrice + videoCardTotalPrice;

    console.log(`Money needed - ${totalMoney.toFixed(2)} leva.`);
}
pcStore(["1200",
"850",
"120",
"4",
"0.1"])


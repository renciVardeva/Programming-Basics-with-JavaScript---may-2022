function agencyProfit(input){
    let airLine = (input[0]);
    let adultTicketCount = Number (input[1]);
    let childTicketCount = Number (input[2]);
    let adultTicketPrice = Number (input[3]);
    let taxService = Number (input[4]);

    let childTicketPrice = adultTicketPrice * 0.30;
    let totalAdultTicket = adultTicketPrice + taxService;
    let totalChildPrice = childTicketPrice + taxService;
    let totalSum = (adultTicketCount * totalAdultTicket) + (childTicketCount * totalChildPrice);
    let profit = totalSum * 0.20;

    console.log(`The profit of your agency from ${airLine} tickets is ${profit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])



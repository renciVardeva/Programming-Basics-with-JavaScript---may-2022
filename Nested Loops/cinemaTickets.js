function cinemaTickets(input){
    let index = 0;
    let command = input[index++];

    let studentTikets = 0;
    let standartTikets = 0;
    let kidsTikets = 0;

    while (command !== "Finish"){
        let movieName = command;
        let freeSeats = Number (input[index++]);

        let secondCommand = input[index++];
        let tiketSold = 0;
        while (secondCommand !== "End"){
            let tiketType = secondCommand;
            tiketSold++
            
            if (tiketType === "student"){
                studentTikets++;
            } else if (tiketType === "standard"){
                standartTikets++;
            } else {
                kidsTikets++;
            }
            if (freeSeats <= tiketSold){
                break;
            }

            secondCommand = input[index++];

        }
        let totalSpaceLeft = tiketSold / freeSeats * 100;
        console.log(`${movieName} - ${totalSpaceLeft.toFixed(2)}% full.`);
        command = input[index++]
    }
    let totalSoldTikets = studentTikets + standartTikets + kidsTikets;
    let studentP = studentTikets / totalSoldTikets * 100;
    let standartP = standartTikets / totalSoldTikets * 100;
    let kidsP = kidsTikets / totalSoldTikets * 100;
    console.log(`Total tickets: ${totalSoldTikets}`);
    console.log(`${studentP.toFixed(2)}% student tickets.`);
    console.log(`${standartP.toFixed(2)}% standard tickets.`);
    console.log(`${kidsP.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])
function vacationBooksList(input){
    let totalPagesCount = Number (input[0]);
    let pagesPerHour = Number (input[1]);
    let daysPerBook = Number (input[2]);

    let totalTimePerBook = totalPagesCount / pagesPerHour;
    let hoursPerDay = totalTimePerBook / daysPerBook;

    console.log(`${hoursPerDay}`);
    
}
vacationBooksList(["432", "15", "4"])
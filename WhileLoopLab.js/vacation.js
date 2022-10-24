function vacation(input) {
  let index = 0;
  let vacationPrice = Number(input[index++]);
  let currentMoney = Number(input[index++]);

  let daysSpend = 0;
  let allDays = 0;

  
  while (vacationPrice > currentMoney) {
    allDays++;
    let action = input[index++];
    let tempMoney = Number(input[index++]);
    if (action === "spend") {
      currentMoney -= tempMoney;
      daysSpend++;
    }
    if (currentMoney < 0) {
      currentMoney = 0;
    }
    if (daysSpend === 5) {
      console.log("You can't save the money.");
      console.log(`${allDays}`);
      break;
    } else if (action === "save") {
      currentMoney += tempMoney;
      daysSpend = 0;
    }
  }
  if (vacationPrice <= currentMoney) {
    console.log(`You saved the money for ${allDays} days.`);
  }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);

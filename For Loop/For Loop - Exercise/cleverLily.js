function cleverLily(input){
    let age = Number (input[0]);
    let washMashinePrice = Number (input[1]);
    let toyPrice = Number (input[2]);

    let toys = 0;
    let money = 0;
    let startMoney = 10;

    for ( let a = 1; a <= age; a++){
        if (a % 2 !== 0){
             toys++
         } else {
             money += startMoney;
             startMoney += 10;
             money--;
        }
   } 
   money += toys * toyPrice;
   let diff = Math.abs(money - washMashinePrice);
   if (money >= washMashinePrice){
       console.log(`Yes! ${diff.toFixed(2)}`);
   }  else {
       console.log(`No! ${diff.toFixed(2)}`);
   }

}
cleverLily(["21",

"1570.98",

"3"])
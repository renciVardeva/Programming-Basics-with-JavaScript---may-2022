function birthdayParty(input){
     let rent = Number (input);

     let cake = rent * 0.2;
     let drinks = cake * 0.55;
     let animator = rent / 3;
     let totalPrice = rent + cake + drinks + animator;
     console.log(totalPrice);
}
birthdayParty("3720")

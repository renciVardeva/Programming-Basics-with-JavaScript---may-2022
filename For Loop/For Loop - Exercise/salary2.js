function salary2(input){
    let openTabs = Number (input[0]);
    let salary = Number (input[1]);

    for (let a = 2; a < openTabs; a++){
        let websiteName = input[a]
        if (websiteName === "Facebook"){
            salary -= 150;
            
        } 
         if ( websiteName === "Instagram"){
            salary -= 100;
            
        }
         if ( websiteName === "Reddit"){
            salary -= 50;
            
        } else {
            salary = salary
        }
        

    }
    if (salary <= 0){
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}
salary2(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])
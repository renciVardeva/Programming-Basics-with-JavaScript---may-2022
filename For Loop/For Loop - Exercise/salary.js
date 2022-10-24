function salary(input){
    
    let openTabs = Number (input.shift());
    let salary = Number (input.shift());
    

   

    for (let a = 0; a < openTabs; a++){
        let websiteName = input[a]
        switch (websiteName){
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
            default: salary = salary; break;
            
            
        }
        
    }
    if ( salary <= 0){
        console.log("You have lost your salary.");
        
    } else {
        console.log(salary);
    }
    
    
}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])
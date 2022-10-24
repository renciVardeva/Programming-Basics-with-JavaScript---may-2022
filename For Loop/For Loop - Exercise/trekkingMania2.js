function trekkingMania2(input){
    let index= 0;
    let type = {"Musala": 0, "MontBlanc" : 0, "Kilimanjaro" : 0, "K2" : 0, "Everest" : 0}
    let peopleCount = 0;
    let groupNum = Number (input[index]);
    index++;

    for ( let a = 1; a < groupNum; a++){
        let total = Number (input[index]);
        peopleCount += total
        index++
        
        

        switch (type){
            case "Musala": total <= 5;break;
            case "MontBlanc": total <= 12; break;
            case "Kilimanjaro": total <= 25; break;
            case "K2": total <= 40; break;
            case "Everest": total >= 41; break;
            
            
            
           
            
        }
        
       
        
    }
    
    
    for (mountain in type){
        
        console.log(`${(type[mountain] / peopleCount * 100).toFixed(2)}%`);
    }
    
    // let p1 = type["Musala"]  / peopleCount * 100;
    // let p2 = type ["MontBlanc"] / peopleCount * 100;
    
    
}
trekkingMania2(["5",

"25",

"41",

"31",

"250",

"6"])
function multplyTable([n]) {
    let hundreds = n % 10;
    let num1 = (n - hundreds)/ 10;
    let deciSign = num1 % 10;
    let ones = (num1 - deciSign) / 10;
    
 
    for (let a = 1; a <= hundreds; a++) {
        for (let b = 1; b <= deciSign; b++) {
            for (let c = 1; c <= ones; c++) {
                let result = a * b * c;
               console.log(`${a} * ${b} * ${c} = ${result};`);  
                
            }
            
        }
        
    }
    
}
multplyTable(["222"]) 
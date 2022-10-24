function mobileOperator(input){
    let contractTime = input[0];
    let type = input[1];
    let internet = input[2];
    let monthCount = Number (input[3]);

    let monthTax = 0;
    let sum = monthTax * monthCount;
     

    switch (contractTime){
        case "one":
            if (type === "Small"){
                monthTax = 9.98;
            } else if (type === "Middle"){
                monthTax = 18.99;
            } else if (type === "Large"){
                monthTax = 25.98;
            } else if (type === "Extralarge"){
                monthTax = 35.99;
            }
            break;
        case "two":
            if (type === "Small"){
                monthTax = 8.58;
            } else if (type === "Middle"){
                monthTax = 17.09;
            } else if (type === "Large"){
                monthTax = 23.59;
            } else if (type === "Extralarge"){
                monthTax = 31.79;
            }
            break;
        }
        if (internet === "yes"){
            if (monthTax <= 10){
                monthTax += 5.50;
            } else if (monthTax <= 30){
                monthTax += 4.35;
            } else if (monthTax > 30){
                monthTax += 3.85;
            }
        }
        if (contractTime === "two"){
            sum *= 0.0375
        }
            
    }
    // if (internet === "yes"){
    //     if (monthTax <= 10){
    //         monthTax += 5.50;
    //     } else if (monthTax <= 30){
    //         monthTax += 4.35;
    //     } else if (monthTax > 30){
    //         monthTax += 3.85;
    //     }
    // }
    // if (contractTime === "two"){
    //     sum *= 0.0375
    // }

    
    console.log(`${sum} lv.`);

mobileOperator(["two",
"Large",
"no",
"10"])

function oscarsWeekInCinema(input){
    let filmName = input[0];
    let hallType = input[1];
    let tiketCount = Number (input[2]);

    let sum = 0;

    if (filmName === "A Star Is Born" && hallType === "normal"){
        sum = tiketCount * 7.50;
    } else if (filmName === "A Star Is Born" && hallType === "luxury"){
        sum = tiketCount * 10.50;
    } else if (filmName === "A Star Is Born" && hallType === "ultra luxury"){
        sum = tiketCount * 13.50;
    }
    if (filmName === "Bohemian Rhapsody" && hallType === "normal"){
        sum = tiketCount * 7.35;
    } else if (filmName === "Bohemian Rhapsody" && hallType === "luxury"){
        sum = tiketCount * 9.45;
    } else if (filmName === "Bohemian Rhapsody" && hallType === "ultra luxury"){
        sum = tiketCount * 12.75;
    }
    if (filmName === "Green Book" && hallType === "normal"){
        sum = tiketCount * 8.15;
    } else if (filmName === "Green Book" && hallType === "luxury"){
        sum = tiketCount * 10.25;
    } else if (filmName === "Green Book" && hallType === "ultra luxury"){
        sum = tiketCount * 13.25;
    }
    if (filmName === "The Favourite" && hallType === "normal"){
        sum = tiketCount * 8.75;
    } else if (filmName === "The Favourite" && hallType === "luxury"){
        sum = tiketCount * 11.55;
    } else if (filmName === "The Favourite" && hallType === "ultra luxury"){
        sum = tiketCount * 13.95;
    }
    console.log(`${filmName} -> ${sum.toFixed(2)} lv.`);
}
oscarsWeekInCinema(["Green Book",
"normal",
"63"])


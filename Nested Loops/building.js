function building(input){
    let floorCount = Number (input[0]);
    let roomCount = Number (input[1]);

    for (let floor = floorCount; floor > 0; floor--){
        let buff = ""
        for (let room = 0; room < roomCount; room++){
            if (floor === floorCount){
                buff += `L${floor}${room} `

            }  else if (floor % 2 == 0){
                buff += `O${floor}${room} `
            } else {
                buff += `A${floor}${room} `
            }
            
            
            
        }
        console.log(buff);
    }
}
building(["6",

"4"])
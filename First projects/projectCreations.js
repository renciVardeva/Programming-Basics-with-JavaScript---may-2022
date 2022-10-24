function projectCreations(input) {

    let architectName = (input[0]);
    let projectsNumber = Number(input[1]);
    let time = projectsNumber * 3;
    
    console.log(`The architect ${architectName} will need ${time} hours to complete ${projectsNumber} project/s.`)

}
projectCreations(['George', 4 ]);
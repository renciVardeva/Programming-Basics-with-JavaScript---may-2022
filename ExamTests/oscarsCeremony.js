function oscarsCeremony(input){
    let rent = Number (input[0]);

    let statues = rent * 0.70;
    let bufet = (statues * 85 / 100);
    let music = bufet / 2;

    let sum = rent + statues + bufet + music;

    console.log(sum.toFixed(2));
}
oscarsCeremony(["5555"])
function aquarium(input){

    let length = Number (input[0]);
    let width = Number (input[1]);
    let height = Number (input[2]);
    let percentageOfAccessories = Number (input[3]);

    let aquariumVolume = length * width * height;
    let aquariumVolumeLitres = aquariumVolume / 1000;

    let requiredLiters = aquariumVolumeLitres * (1 - 0.185);

    console.log(requiredLiters)
}
aquarium(["105", "77", "89", "18.5"])
let userBirthYear = prompt("What is your year of birth?");
let digitBirthYear = +userBirthYear;
let userCityFrom = prompt("In Which city do you live?");
let userFavoriteSport= prompt("What is your favorite sport?");

if (userBirthYear != null) {
    console.log(`${2024 - digitBirthYear}`);
} else {
    console.log("It's a pity that you didn't want to enter your age");
}

if (userCityFrom === null ) {
    console.log("It's a pity that you didn't want to enter your сity");
} else if (userCityFrom === "Kyiv") {
    console.log("You live in the capital of Ukraine");
} else if (userCityFrom === "Washington") {
    console.log("You live in the capital of United States of America");    
} else if (userCityFrom === "London") {
    console.log("You live in the capital of United States of Great Britain");
} else {
    console.log(userCityFrom);
}

if (userFavoriteSport === null ) {
    console.log("It's a pity that you didn't want to enter your favorite sport");
} else if (userFavoriteSport === "Football") {
    console.log("It's cool you want to become Messi");
} else if (userFavoriteSport === "Boxing") {
    console.log("It's cool you want to become Taison");    
} else if (userFavoriteSport === "Tennis") {
    console.log("It's cool you want to become Svitolina");
} else {
    console.log(userFavoriteSport);
}

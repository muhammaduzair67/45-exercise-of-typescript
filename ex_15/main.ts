let guestList = ["Uzair", "Usman", "Ayesha", "Areeba"];

let dontCome = guestList[0];

console.log(dontCome, "Nai Ahh skta");

guestList.splice(0,1, "arsalan");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me`));

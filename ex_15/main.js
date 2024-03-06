var guestList = ["Uzair", "Usman", "Ayesha", "Areeba"];
var dontCome = guestList[0];
console.log(dontCome, "Nai Ahh skta");
guestList.splice(0, 1, "arsalan");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me")); });

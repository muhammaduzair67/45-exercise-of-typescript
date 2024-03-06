// Creating a Guest List  Array
var guestList = ["Uzair", "Usman", "Ayesha", "Areeba"];
// making variable for those guest who cant come
var dontcome = guestList[0];
// print the name of guest who cant come
console.log(dontcome, "Naii Ahh Sakhty Ha");
// add or remove values from guest list array
guestList.splice(0, 1, "arsalan");
// message print for bugger table
console.log("Good News ! We have Found a Bigger table for Dinner.");
// adding a new value at starting index of array
guestList.unshift("Ali");
// adding a new value at ending index of array
guestList.push("Zain");
// get a middle index of our guest List array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
// print message of updated list 
console.log("Updated list of our guests");
// sending a invitation message to our guest with their name
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });

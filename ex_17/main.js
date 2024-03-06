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
// infoam that the only two guest can be invited for this event for dinner
console.log("Unfortunately, the newdinner table won arrive on time, so I can only invite two guest with me ");
// using while-loop to remove the guest from array untill only two names remain 
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry, ".concat(removedGuest, " i can invite you to dinner"));
}
// sending a invitation to the last 2 guest on the list
console.log("Invitation to the last 2 guest");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print its original order
var countriesToVisit = ["china", "denmark", "brazil", "argentina"];
console.log("original order:", countriesToVisit);
// print the array in alphabetical order without modifying the actual array list
console.log("alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array  is still in its original order
console.log("still in original order:", countriesToVisit);
// print the array in revered order without modifying the actual array list
console.log("reverse order:", __spreadArray([], countriesToVisit, true).reverse());
// show that the array is still in its original order
console.log("still in original order:", countriesToVisit);
// we have changed the original array order now
console.log("original array revered:", countriesToVisit.reverse());
// print the array to show that its back to its original order
console.log("back to original order:", countriesToVisit.reverse());
// print the array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriesToVisit.sort());
// we have changed again the original array oder now in reverse order again
console.log("orignal array reversed again", countriesToVisit.reverse());

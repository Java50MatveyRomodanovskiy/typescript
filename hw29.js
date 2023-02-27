//alfabet - initial (model) string.
var alfabet = ("abcdefghijklmnopqrstuvwxyz").split("");
// shiftRound - The function checks each character in the tested string against the model.
// The function checks each character in the tested string against the model. 
// And if it finds a match, it changes the symbol by shifting it to the right by the set amount.
function shiftRound(str, shift) {
    if (shift === void 0) { shift = 1; }
    var ar = str.split("");
    shift = shift <= alfabet.length ? shift : shift % alfabet.length;
    var res = ar.map(function (e) { return shiftMapper(e, shift); });
    return res.join("");
}
// The same as shiftRound, but if it finds a match, it changes the symbol by shifting it to the left by the set amount.
function unShiftRound(str, shift) {
    if (shift === void 0) { shift = 1; }
    var ar = str.split("");
    shift = shift <= alfabet.length ? shift : shift % alfabet.length;
    var res = ar.map(function (e) { return shiftMapper(e, -shift); });
    return res.join("");
}
//A helper function that checks if a character matches the control string and replaces it with the shift value.
function shiftMapper(element, shift) {
    if (alfabet.indexOf(element) >= 0) {
        var newIndex = alfabet.indexOf(element) + shift;
        if (newIndex >= 0 && newIndex < alfabet.length) {
            element = alfabet[newIndex];
        }
        else {
            if (newIndex >= 0) {
                element = alfabet[newIndex - alfabet.length];
            }
            else {
                element = alfabet[alfabet.length + newIndex];
            }
        }
    }
    return element;
}
console.log(shiftRound("AaBgtz", 261));
console.log(unShiftRound("AaBhua", 261));

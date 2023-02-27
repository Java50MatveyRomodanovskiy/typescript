//alfabet - initial (model) string.
const alfabet: string[] = ("abcdefghijklmnopqrstuvwxyz").split("");
// shiftRound - The function checks each character in the tested string against the model.
// The function checks each character in the tested string against the model. 
// And if it finds a match, it changes the symbol by shifting it to the right by the set amount.
function shiftRound(str: string, shift: number = 1): string {
     let ar: string[] = str.split("");
     shift = shift <= alfabet.length ? shift : shift % alfabet.length;
     const res = ar.map(e => shiftMapper(e, shift));
     return res.join("");
}
// The same as shiftRound, but if it finds a match, it changes the symbol by shifting it to the left by the set amount.
function unShiftRound(str: string, shift: number = 1): string {
     let ar: string[] = str.split("");
     shift = shift <= alfabet.length ? shift : shift % alfabet.length;
     const res = ar.map(e => shiftMapper(e, - shift));
     return res.join("");
}

//A helper function that checks if a character matches the control string and replaces it with the shift value.
function shiftMapper(element: string, shift: number) {
     if (alfabet.indexOf(element) >= 0) {
          let newIndex: number = alfabet.indexOf(element) + shift;
          if (newIndex >= 0 ) {
               newIndex = newIndex % alfabet.length;
               element = alfabet[newIndex];
          } else {
                    element = alfabet[alfabet.length + newIndex];
               }
          }
     
     return element;
}
console.log(shiftRound("AaBgtz", 261));
console.log(unShiftRound("AaBhua", 261));
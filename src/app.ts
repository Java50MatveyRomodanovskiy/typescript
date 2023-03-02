
import { CipherImpl } from "./CipherDecipher";
import { displayCipherDecipher } from "./displayCipherDecipher";
const cipher: CipherImpl = new CipherImpl(1);
displayCipherDecipher(cipher, " /1234asdz ~");

//test
let rand = 300 + Math.floor(Math.random() * 1000); //Random int from 300 to 1000 - number of tests
let i=0;
while (i<=rand){
    let str = "";
    let stringLength = 10 + Math.floor(Math.random() * 128); //length of test string from 10 to 127
    for (let index = 0; index < stringLength; index++) {
        const randomElem = 32 + Math.floor(Math.random() * 95); //random ASCII element from 0 to 127;
        str += String.fromCharCode(randomElem);
    }
    const shift = Math.floor(Math.random() * 1000);//random shift of string from 0 to 127;
    const testCipher : CipherImpl = new CipherImpl(shift);
    if ((testCipher.decipher(testCipher.cipher(str))) != str ){
        throw "Test error";
    }
    i++;
}
console.log("It works");
 
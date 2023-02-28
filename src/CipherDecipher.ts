import { Cipher } from "./Cipher";
import { shiftRound } from "./CipherShiftRound";
export class CipherImpl implements Cipher {
    constructor(private shift: number){}
    
    cipher (text: string): string {
    return shiftRound(text, this.shift);
    }

    decipher(ciferText : string): string {
    return shiftRound(ciferText, - this.shift);
    }
    
}
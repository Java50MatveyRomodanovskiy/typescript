import { shiftLetter } from "./CipherShiftLetter"
export function shiftRound(str: string, shift: number): string {
    shift = (128 + shift % 128) % 128 // normalize any positive or negative shift to be always from 0 to 25
    return str
      .split("")
      .map(symbol => shiftLetter(symbol, shift))
      .join("")
}

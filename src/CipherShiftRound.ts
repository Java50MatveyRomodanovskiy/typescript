import { shiftLetter } from "./CipherShiftLetter"
export function shiftRound(str: string, shift: number): string {
  const delimeter = '~'.charCodeAt(0) - ' '.charCodeAt(0) + 1;
    shift = (delimeter + shift % delimeter) % delimeter // normalize any positive or negative shift to be always in border
    return str
      .split("")
      .map(symbol => shiftLetter(symbol, shift))
      .join("")
}

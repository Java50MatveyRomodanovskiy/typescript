import { shiftLetter } from "./CipherShiftLetter"
export function shiftRound(str: string, shift: number): string {
  const devider = '~'.charCodeAt(0) - ' '.charCodeAt(0) + 1;
    shift = (devider + shift % devider) % devider // normalize any positive or negative shift to be always in border
    return str
      .split("")
      .map(symbol => shiftLetter(symbol, shift))
      .join("")
}

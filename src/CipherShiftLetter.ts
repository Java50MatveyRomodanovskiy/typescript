export function shiftLetter(letter : string, shift: number) : string{
    const aCode = ' '.charCodeAt(0)
    let offset = letter.charCodeAt(0) - aCode;
    let newPosition = (aCode +(offset + shift) % ('~'.charCodeAt(0) - ' '.charCodeAt(0) + 1)); 
    return String.fromCharCode(newPosition );
}

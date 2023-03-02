export function shiftLetter(letter : string, shift: number) : string{
    const aCode = ' '.charCodeAt(0)
    let offset = letter.charCodeAt(0) - aCode;
    let newPosition = (aCode +(offset + shift) % 95); 
    return String.fromCharCode(newPosition );
}

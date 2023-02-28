export function shiftLetter(letter : string, shift: number) : string{
    let newPosition = (letter.charCodeAt(0) + shift)%128 
    return String.fromCharCode(newPosition );
}

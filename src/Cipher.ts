export interface Cipher{
    cipher(plainText : String): string;
    decipher (ciferText : String): string;
}
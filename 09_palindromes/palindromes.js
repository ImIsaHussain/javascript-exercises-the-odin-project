const palindromes = function (pal) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanString = pal
        .toLowerCase()
        .split('')
        .filter((char) => alphabet.includes(char))
        .join('');

    const reverseString = cleanString.split('').reverse().join('');

    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;

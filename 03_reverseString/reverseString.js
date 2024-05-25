const reverseString = function () {
    word = arguments[0];
    let result = '';

    for (let i = word.length; i >= 0; i--) {
        result += word.charAt(i);
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;

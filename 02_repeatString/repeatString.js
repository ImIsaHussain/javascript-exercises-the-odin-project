const repeatString = function () {
    word = arguments[0];
    times = arguments[1];

    let result = '';

    if (times < 0) {
        return 'ERROR';
    } else if (times == 0) {
        return '';
    } else {
        for (let i = 0; i < times; i++) {
            result += word;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;

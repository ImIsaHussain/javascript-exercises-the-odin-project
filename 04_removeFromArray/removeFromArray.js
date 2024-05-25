const removeFromArray = function () {
    let arrayCopy = [...arguments[0]];
    let returnArray = [];

    for (let i = 0; i < arrayCopy.length; i++) {
        let remove = false;
        for (let j = 1; j < arguments.length; j++) {
            let valueToRemove = arguments[j];
            if (arrayCopy[i] === valueToRemove) {
                remove = true;
                break;
            }
        }
        if (!remove) {
            returnArray.push(arrayCopy[i]);
        }
    }

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;

function parseCount(number) {
    if (isNaN(parseFloat(number))) {
        throw new Error("Невалидное значение");
    } 
    else return parseFloat(number);
}

function validateCount(number) {
    try {
        parseCount(number);
    }
    catch (error) {
        return error;
    }
    return parseCount(number);
}
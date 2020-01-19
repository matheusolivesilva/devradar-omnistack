module.exports =function parseStringAsArray(arrayAsString) {
    const techsArray = arrayAsString.split(',').map(arrayAsString => arrayAsString.trim());
    return techsArray;
}
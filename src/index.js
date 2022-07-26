module.exports = function reverse (n) {
    const numToString = n.toString();
    const readyArray = numToString.split("").reverse().join("");
    return +readyArray.replace(/-/g,'');
}
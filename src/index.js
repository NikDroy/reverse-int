module.exports = function reverse (n) {
    const arr = n.toString().split("").reverse().join("");
    return +arr.replace(/-/g,'')
}
module.exports = function reverse(n) {
    if (n.toString()[0] === "-") {
        n = n.toString().slice(1);
    }
    n = n.toString().split("").reverse().join("");
    return n;
};

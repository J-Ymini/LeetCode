/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const filteredSpace = s.trim().split(" ").filter(word => !!word).reverse().join(" ")

    return filteredSpace
};
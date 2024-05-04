/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false
    }
    const previous = String(x)
    const reversed = previous.split('').reverse().join('')
    const result = previous === reversed
    return result
};
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let result = 0;

    gain.reduce((acc,curr) =>{

        const sum = acc + curr
        if(sum > result) {
            result = sum
        }
        return sum
    }, result)

    return result
};
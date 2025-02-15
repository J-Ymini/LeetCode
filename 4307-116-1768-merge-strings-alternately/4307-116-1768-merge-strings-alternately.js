/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let restFirstWord = word1;
    let restSecondWord = word2;
    let result = ''; 

    while (restFirstWord.length !== 0 && restSecondWord.length !== 0) {
        result = result.concat(restFirstWord[0], restSecondWord[0]);

        restFirstWord = restFirstWord.slice(1);  
        restSecondWord = restSecondWord.slice(1);
    }

    return result.concat(restFirstWord, restSecondWord);       
};
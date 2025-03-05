/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

 /** 
 반복문을 통한 단순한 방법
  */
var kidsWithCandies = function(candies, extraCandies) {
/** 
 1. 반복문을 통한 단순한 방법
*/
    // const output = candies.map((candy, index, array) => {
    //   let result = true
    //   let greatestNumberOfCandies = candy + extraCandies;
    //   const copiedCandies = [...candies]
    //   copiedCandies.splice(index,1)
    //   const restCandies = copiedCandies

    //   for(let restCandy of restCandies) {
    //     if(greatestNumberOfCandies < restCandy) {
    //         result = false
    //         break;
    //     }
    //   }
    //   return result
    // })
    // return output

/** 
 2. Max 활용
  */
  const mostGreatestCandy = Math.max(...candies)
  return candies.map(candy => candy + extraCandies >= mostGreatestCandy)
};
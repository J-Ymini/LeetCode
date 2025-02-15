/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
/**
 - 처음 풀었지만, 잘못된 방법-
 Set을 사용하여 중복을 제거
 중복을 제거한 후에 array로 변경하여 기존 인자로 들어온 배열 길이와 비교
 같으면 중복된 숫자가 없다는 뜻으로 false
 다르면 중복된 숫자가 존재한다는 뜻으로 true
 
 // return arr.length !== [...new Set(arr)].length

 - 다시 푼 방법-
 단순히 중복으로만 생각했는데, 문제를 잘못 읽음
 => 반복된 횟수를 지칭, 반복되는 횟수가 모두 다르면 true, 아니면 false
 */

let result = true;
    for(let num of arr) {
        if(!map.has(num)) {
            map.set(num, 1);
            continue;
        }
        map.set(num, map.get(num) + 1)
    }

/**
 여기서 두가지 방법이 존재함
 - sort 후에 순회를 돌면서 확인할건지
 - Set을 통해서 중복 여부를 확인할건지
 */

 /**
 - 순회를 돌면서 확인하는 방법
  */
    // const resultArray = [...map.values()].sort((a,b) => a - b)
    
    // for(let i = 0; i < resultArray.length - 1; i++) {
    //     if(resultArray[i] === resultArray[i + 1]) {
    //         result = false;
    //         break;
    //     }
    // }
    // return result

/**
 - Set을 통해 중복 제거 후 length를 비교하는 방법
  */

  return map.size === new Set(map.values()).size
};
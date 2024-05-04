/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result
    let currentIndex = 0
    const hashMap = new Map()
  
    while((nums.length - 1) >= currentIndex) {
      const remaining = target - nums[currentIndex]
      if(hashMap.has(remaining)) {
        result = [currentIndex, hashMap.get(remaining)]
        break;
      }
      hashMap.set(nums[currentIndex], currentIndex)
      currentIndex += 1     
        }
  
  return result
    };
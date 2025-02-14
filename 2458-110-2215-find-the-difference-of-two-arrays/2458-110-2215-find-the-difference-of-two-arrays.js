/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const settedNum1 = new Set(nums1)
    const settedNum2 = new Set(nums2)
/**
Set 
- 중복을 허용하지 않는 값들의 집합
- 고유한 값을 저장하고 검색하기 위해 사용
- 순ㅓ가 없으므로 요소에 인덱스로 접근X


 */
    const result1 = [...settedNum1].filter((el) => !settedNum2.has(el))
    const result2 = [...settedNum2].filter((el) => !settedNum1.has(el))
    

    return [result1, result2]
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

/**
Set 
- 중복을 허용하지 않는 값들의 집합
- 고유한 값을 저장하고 검색하기 위해 사용
- 순서가 없으므로 요소에 인덱스로 접근X
- 루프가 두번 돌아야하므로 다른 방법 다시 확인
 */
    // const settedNum1 = new Set(nums1)
    // const settedNum2 = new Set(nums2)
    // const result1 = [...settedNum1].filter((el) => !settedNum2.has(el))
    // const result2 = [...settedNum2].filter((el) => !settedNum1.has(el))
    // return [result1, result2]

/**
- 겹치는 수만 제거하면 되므로 이전 방법처럼 순회를 두번 돌것이 아닌, 첫번째 Set 객체만 순회하면서 두번째 Set 객체에 해당 숫자가 포함될시 양쪽 Set 객체를 지우는 방식으로 변경
 */    
    const settedNum1 = new Set(nums1);
    const settedNum2 = new Set(nums2);

    for(num of settedNum1) {
        if(settedNum2.has(num)) {
            settedNum1.delete(num);
            settedNum2.delete(num);
        }
    }
    
    return [[...settedNum1],[...settedNum2]]
};
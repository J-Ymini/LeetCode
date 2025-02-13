/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2 !== str2+str1) {
        return ''
    }
/**
헬퍼 함수 사용 
  - 유클리드 알고리즘, 유클리드 호제법
  - 이전 계산의 분모가 분자로, 이전 계산의 결과의 나머지가 분모로 가서 0이 나올때까지 재귀
*/
    const gcd = (x,y) => {
        if(!y) {
            return  x;
        }
      return gcd(y, x % y)
    }

    const result = gcd(str1.length, str2.length)
    return str2.slice(0, result)
};
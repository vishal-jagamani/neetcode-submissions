class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack=[];
        const obj = { ')': '(', '}': '{', ']': '['};
        for(const char of s) {
            if(obj[char]) {
                if(stack.length>0 && stack[stack.length-1]===obj[char]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length===0;
    }
}

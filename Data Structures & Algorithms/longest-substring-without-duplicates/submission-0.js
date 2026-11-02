class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i=0,j=0, maxLength = 0;
        const set = new Set();
        while(j<s.length) {
            if(set.has(s[j])) {
                set.delete(s[i]);
                i++
            } else {
                set.add(s[j]);
                maxLength = Math.max(maxLength, j-i+1)
                j++;
            }
        }
        return maxLength;
    }
}

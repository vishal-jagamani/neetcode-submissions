class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let str = strs[0];
        for(let i=0;i<strs.length;i++) {
            let j=0;
            while(j < Math.min(str.length, str.length)) {
                if(str[j]!==strs[i][j]) {
                    break;
                }
                j++;
            }
            str = str.slice(0,j);
        }
        return str;
    }
}

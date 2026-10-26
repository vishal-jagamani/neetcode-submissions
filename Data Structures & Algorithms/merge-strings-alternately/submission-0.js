class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let string = "";
        while(word1.length && word2.length) {
            string+=word1.slice(0,1);
            string+=word2.slice(0,1);
            word1 = word1.slice(1);
            word2 = word2.slice(1);
        }
        if(word1.length) string+=word1;
        if(word2.length) string+=word2;
        return string;
    }
}

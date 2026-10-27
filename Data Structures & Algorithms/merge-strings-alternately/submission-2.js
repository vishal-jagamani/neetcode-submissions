class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let array = [];
        let l=0,r=0;
        while(l<word1.length && r<word2.length) {
            array.push(word1[l],word2[r]);
            l++;
            r++;
        }
        if(l<word1.length) {
            array.push(word1.slice(l));
        }
        if(r<word2.length) {
             array.push(word2.slice(r));
        }
        return array.join('');
    }
}

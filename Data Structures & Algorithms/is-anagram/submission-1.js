class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const string1 = s.split('').sort().join('');
        const string2 = t.split('').sort().join('');
        return string1===string2;
    }
}

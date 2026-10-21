class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.toLowerCase().replaceAll(" ","").replace(/[^a-zA-Z0-9]/g,"")
        const reversedString = s.toLowerCase().replaceAll(" ", "").replace(/[^a-zA-Z0-9]/g,"").split("").reverse().join('');
        return string===reversedString;
    }
}

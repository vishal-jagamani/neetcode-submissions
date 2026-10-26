class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const array=[];
        for(const num of nums) {
            if(array.includes(num)) return true;
            array.push(num);
        }
        return false;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const obj = {};
        for(const num of nums) {
            obj[num] = (obj[num]|| 0)+1
        }
        for(const key in obj) {
            if(obj[key] > (nums.length/2)) {
                return key;
            }
        }
    }
}

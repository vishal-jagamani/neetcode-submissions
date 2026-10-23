class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let index = nums.findIndex((x) => x >= target);
        return index !== -1 ? index : nums.length;
    }
}

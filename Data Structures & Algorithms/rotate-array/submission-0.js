class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;
        k = k % n;

        if (k === 0) return;

        const res = nums.splice(n - k, k);
        nums.unshift(...res);
    }
}

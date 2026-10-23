class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for(const num of nums) {
            obj[num] = (obj[num]|| 0) + 1;
        }
        const array = Object.keys(obj).sort(
            (a, b) => obj[b] - obj[a]
        );

        return array.slice(0, k).map(Number);
    }
}

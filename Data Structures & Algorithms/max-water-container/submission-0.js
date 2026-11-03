class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0,j = heights.length - 1;
        let maxArea = 0;
        while(i<j) {
            const height = Math.min(heights[i], heights[j]);
            const width = j - i;
            const area = height * width;
            maxArea = Math.max(maxArea, area);
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return maxArea;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i=0, j=1, maxProfit = 0;
        while(j<prices.length) {
           if(prices[i]<prices[j]) {
            const profit = prices[j] - prices[i];
            maxProfit = Math.max(maxProfit, profit);
           } else {
            i=j;
           }
           j++;
        }
        return maxProfit;
    }
}

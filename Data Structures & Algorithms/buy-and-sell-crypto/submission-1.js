class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i=0, j=1, maxProfit = 0;
        while(i<prices.length && j<prices.length) {
            if((prices[j]-prices[i]) > maxProfit) {
                maxProfit = prices[j] - prices[i];
            }
            if(prices[i] > prices[j]) {
                i++;
            } else {
                j++;
            }
        }
        return maxProfit;
    }
}

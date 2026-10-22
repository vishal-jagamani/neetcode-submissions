class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let score = [];
        for(let i=0;i<operations.length;i++) {
            if(operations[i]==='+') {
                score.push(score[score.length-1]+score[score.length-2]);
            } else if(operations[i]==='D') {
                score.push(score[score.length-1]*2);
            } else if(operations[i]==='C') {
                score.pop();
            } else {
                score.push(Number(operations[i]))
            }
        }
        return score.reduce((acc, sum) => acc + sum, 0);
    }
}

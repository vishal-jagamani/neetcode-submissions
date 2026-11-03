class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people = people.sort((a,b)=>a-b);
        let i = 0,j = people.length - 1;
        let boats = 0;
        while(i<=j) {
            let remain = limit - people[j--];
            boats++;
            if (remain >= people[i]) {
                i++;
            }
        }
        return boats;
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(const item of strs) {
            const sorted = item.split('').sort().join('');
            const items = map.get(sorted);
            if(items) {
                items.push(item)
            } else {
                map.set(sorted, [item]);
            }
        }
        return Array.from(map.values());
    }
}

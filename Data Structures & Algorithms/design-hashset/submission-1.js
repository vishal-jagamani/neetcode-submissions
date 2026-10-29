class MyHashSet {
    constructor() {
        this.items =[];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.items.includes(key)) {
            this.items.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.items.indexOf(key);
        if(index!==-1) {
            this.items.splice(index, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.items.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

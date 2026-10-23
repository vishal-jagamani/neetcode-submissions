class MinStack {
    constructor() {
        this.items=[];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val);
        if (
            this.minStack.length === 0 ||
            val <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
       const removed = this.items.pop();

        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1];
    }
}

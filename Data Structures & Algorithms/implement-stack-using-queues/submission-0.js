class MyStack {
    constructor() {
        this.items=[];
        this.size=0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.items.push(x);
        this.size++;
    }

    /**
     * @return {number}
     */
    pop() {
        const item = this.items[this.items.length-1];
        this.items.pop();
        this.size--;
        return item;
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length-1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.size===0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

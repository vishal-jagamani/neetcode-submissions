class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for(let i=0;i<tokens.length;i++) {
            const token = tokens[i];
            if(['+','-','*','/'].includes(token)) {
                let result;
                const b=stack.pop();
                const a=stack.pop();
                if(token==='+') {
                    result = a+b;
                } else if(token==='-') {
                    result = a-b;
                } else if(token==='*') {
                    result = a*b;
                } else {
                    result = Math.trunc(a/b);
                }
                stack.push(result);
            } else {
                stack.push(Number(token))
            }
        }
        return stack[0];
    }
}

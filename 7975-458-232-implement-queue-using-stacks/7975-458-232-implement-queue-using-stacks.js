
var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this._shiftStack(this.inStack, this.outStack)
    return this.outStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this._shiftStack(this.inStack, this.outStack)
    return this.outStack[this.outStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0
};

MyQueue.prototype._shiftStack = function(fromStack, toStack) {
    if (this.outStack.length === 0) {
    while(fromStack.length !== 0) {
        toStack.push(fromStack.pop())
    }
    }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
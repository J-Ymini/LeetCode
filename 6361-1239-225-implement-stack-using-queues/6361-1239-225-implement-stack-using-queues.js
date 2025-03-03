
var MyStack = function() {
    this.firstQueue = [];
    this.secondQueue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.firstQueue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.firstQueue.length > 1) {
        this.secondQueue.push(this.firstQueue.shift());
    }
    const result = this.firstQueue.shift();

    while(this.secondQueue.length !== 0) {
        this.firstQueue.push(this.secondQueue.shift());
    }
    return result
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(this.firstQueue.length > 1) {
        this.secondQueue.push(this.firstQueue.shift());
    }
    const result = this.firstQueue[0]

    this.secondQueue.push(this.firstQueue.shift())
    while(this.secondQueue.length !== 0) {
        this.firstQueue.push(this.secondQueue.shift());
    }
    return result
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.firstQueue.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
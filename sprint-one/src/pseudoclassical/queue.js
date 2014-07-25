var Queue = function(){ //make sure the first letter of the variable is capitalized
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(val) {
    this.storage[this.tail] = val;
    this.tail++;
};

Queue.prototype.dequeue = function() {
    if (this.head < this.tail) {
      var result = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return result;
    }
};

Queue.prototype.size = function() {
    return this.tail - this.head;
};

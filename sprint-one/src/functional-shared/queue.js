var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.head = 0;
  instance.tail = 0;

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.tail] = val;
    this.tail++;
  },
  dequeue: function() {
    if (this.head < this.tail) {
      var result = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return result;
    }
  },
  size: function() {
    return this.tail - this.head;
  }
};




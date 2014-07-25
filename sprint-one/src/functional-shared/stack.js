var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.sizeVal = 0;

  _.extend(instance, stackMethods);

  return instance;

};

var stackMethods = {
  push: function(val) {
    this.storage[this.sizeVal] = val;
    this.sizeVal++;
  },
  pop: function() {
    if (this.sizeVal > 0) {
      var result = this.storage[this.sizeVal-1];
      delete this.storage[this.sizeVal-1];
      this.sizeVal--;
      return result;
    }
  },
  size: function() {
    return this.sizeVal;
  }
};



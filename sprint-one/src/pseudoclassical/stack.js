var Stack = function() {
    this.storage = {};

    //important to keep track of of the keys
    this.sizeVal = 0;

};

Stack.prototype.push = function(value) {
                          this.storage[this.sizeVal] = value;
                          this.sizeVal++;
                        };
Stack.prototype.pop = function() {
                        if (this.sizeVal > 0) {
                          var result = this.storage[this.sizeVal - 1];
                          delete this.storage[this.sizeVal - 1];
                          this.sizeVal--;
                          return result;
                        }
                      };
Stack.prototype.size = function() {
                        return this.sizeVal;
                       };

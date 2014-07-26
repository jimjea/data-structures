var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = [];
  this._storage[i].push({k:v});

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Access storage at [i]
  // check to see if it is a bucket or not
  if (this._storage[i].length = 1) {
    return this._storage[i][0].k;
  } else {
    for ( var j = 0; j < this._storage[i].length; j++) {
      if(k === Object.keys(this._storage[i][j])) {
        return this._storage[i][j][k];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
  // Access storage at [i]
  // check to see if it is a bucket or not
  if (this._storage[i].length = 1) {
    this._storage[i][0].k = null;
  } else {
    for ( var j = 0; j < this._storage[i].length; j++) {
      if(k === Object.keys(this._storage[i][j])) {
        this._storage[i][j][k] = null;
      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

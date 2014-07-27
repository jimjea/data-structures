var HashTable = function(){
  this._limit = 8;
  // references the helper functions
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // hash index
  var i = getIndexBelowMaxForKey(k, this._limit);
  // check if the current hash index is empty
  if (!this._storage.get(i)) {
  	// if it is, add a bucket
  	this._storage.set(i, []);
  	// then push in the key value
  	this._storage.get(i).push([k,v]);
  } else {
  	// if a bucket already exists, push the key value
  	this._storage.get(i).push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // check each key value within the bucket, even if the bucket only has 1 value
  for (var j = 0; j < this._storage.get(i).length; j ++) {
  	//if the key is equal to the key
    if (this._storage.get(i)[j][0] === k) {
      // return the key
      return this._storage.get(i)[j][1];
    }
  }
  // if after iterating through the bucket and no match was found, return null
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
    // iterate through the bucket
  	for (var j = 0; j < this._storage.get(i).length; j ++) {
  	  if (this._storage.get(i)[j][0] === k) {
  	  	// splice out the key value so there isn't an extra space
  	    this._storage.get(i)[j].splice(j,1);
  	  }
  	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

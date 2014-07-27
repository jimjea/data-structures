var makeSet = function(){
  // using a protypal instantiation
  var set = Object.create(setPrototype);
  // need to have a storage object because the return SET object contains the methods
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	// convert the key to a string
	var stringed = JSON.stringify(item);
	// store the item in the key
	this._storage[stringed] = item;
};

setPrototype.contains = function(item){ 
 	// need to stringify again because this doesn't have access to the prev scope
 	var stringed = JSON.stringify(item);
 	// check if in the object
	return (stringed in this._storage);
};

setPrototype.remove = function(item){
	// stringify again bc lost scope from prev method
	var stringed = JSON.stringify(item);
	// delete this particular value (O(1))
	delete this._storage[stringed];
};

/*
 * Complexity: What is the time complexity of the above functions?
     -Adding and removing have a O(1) or constant time complexity
     -Contains has a O(n) time complexity
     -Remove has a O(1) time complexity
     -Great for adding or removing without any type of association
 */

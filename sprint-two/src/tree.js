var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  // children will be an array bc we can easily store multiple children in a separate index
  newTree.children = [];
  // since we're using functional sharing, we need to extend the methods to this object
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  // the first tree will have already been created
  // create a closure for another tree
  var tree = makeTree(value);
  // push that tree the the tree children
  this.children.push(tree);
  // accounts for adding a children to a children tree based on how the function is called
  // i.e. this.children[0].addChild(value) will add a child to children's children
};

treeMethods.contains = function(target){
  // base case = check the tree if it contains the value
  if (this.value === target) {
  	return true;
  	// check if this tree has children
  } else if (this.children) {
  	// check each child separately
  	for (var i = 0; i < this.children.length; i ++) {
  	  var child = this.children[i];
  	  // check each child recursively
  	  if (child.contains(target)) {
  	  	return true;
  	  }
  	}
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
     -adding a child is O(1)
     -contains is O(n)
 */

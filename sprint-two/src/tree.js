var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = makeTree(value);
  this.children.push(tree);

};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else if (this.children) {
    for (var i = 0; i < this.children.length; i ++) {
      var child = this.children[i];
      if(child.contains(target)) {
        return true;
      }
    }
  }
  return false;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

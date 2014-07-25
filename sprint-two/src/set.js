var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  var stringed = JSON.stringify(item);
  this._storage[stringed] = stringed;
};

setPrototype.contains = function(item){
  var stringed = JSON.stringify(item);
  if(stringed in this._storage) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  var stringed = JSON.stringify(item);
  if(stringed in this._storage) {
    delete this._storage[stringed];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

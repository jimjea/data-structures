var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if(!list.tail) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var result = list.head.value;
    if(list.head.next) {
      list.head = list.head.next;
    } else {
      list.head = null;
    }
    return result;
  };

  list.contains = function(target){
    while(list.head) {
      if(list.head.value === target) {
        return true;
      }
      list.head = list.head.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

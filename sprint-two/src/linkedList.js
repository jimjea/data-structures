var makeLinkedList = function(){
  var list = {};
  // head and tail initially are not pointing at anything
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // create a closure for makeNode
    var node = makeNode(value);
    // check if the list if empty
    // initially null so we need to negate the argument
    if (!list.head) {
      //if it is empty, assign the head and tail to point to node
      list.head = node;
      list.tail = node;
    } else {
      // if it is NOT empty, we are adding in a NEW node to the existing list 
      // set the CURRENT .next property of the CURRENT node to equal the NEW node
      //     ** this is setting the current node to point to the new node
      // *** doesn't really matter if using this.tail.next or this.head.next
      //     since the .next simply changes the next property in the closure node
      list.tail.next = node;
      // assigning new node.prev to the CURRENT node
      node.prev = list.tail;
      // THEN reassign the CURRENT tail to point to the NEW node
      list.tail = node;
    }
  };

  list.addToHead = function(value) {
    // very similar consturct to addToTail
    var node = makeNode(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      // biggest caveat is setting the head.prev to node
      list.head.prev = node;
      node.next = list.head;
      list.head = node;
    }
  };

  list.removeHead = function(){
    // store the current head value in order to return it after deleting it
    var result = this.head.value;
    // check if the head is linked to another node
    if (this.head.next) {
      // reassign head to point to its linked node
      this.head = this.head.next;
    } else {
      // or set it to null
      this.head = null;
    }
    // return the deleted head's value
    return result;
  };

  list.removeTail = function() {
    // very similar construct to removeHead
    var result = list.tail.value;
    // biggest caveat is reassigning tail to tail.prev
    if (list.tail.prev) {
      this.tail = this.tail.prev;
    } else {
      this.tail = null;
    }
    return result;
  };

  list.contains = function(target){
    // use while loop since we don't know # of iterations
    // check the .head.value because this will be the first node in the list
    while(list.head) {
      if (list.head.value === target) {
        return true;
      }
      // if it doesn't match the target, set the .head to be the .next node
      list.head = list.head.next;
    }
    // or else return false
    return false;
  };

  return list;
};

//function to create a new node
var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  //add a prev property for a doubly linked list
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
     -.addToTail has a O(1) time complexity
     -.contains has a O(n) time complexity
     -.removeHead has a O(1) time complexity
     -Great for quickly adding and removing items to a list
 */

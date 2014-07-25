var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var score = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[score] = value;
    score++;
  };

  someInstance.pop = function(){
    if(score > 0) {
      score--;
    }
    return  storage[score];
  };

  someInstance.size = function(){
    return score;
  };

  return someInstance;
};

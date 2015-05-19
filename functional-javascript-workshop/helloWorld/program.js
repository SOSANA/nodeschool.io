/*
 * Task
 * Write a function that takes an input string and returns it uppercased.
 * 
 * Arguments   
 * input: a String of random words (lorem ipsum).
 * 
*/

function upperCaser(input) {                                                                                               
      // SOLUTION GOES HERE 
      var inputUpperCased = input.toUpperCase();
      return inputUpperCased;
    } 

module.exports = upperCaser

// Here's the official solution in case you want to compare notes:
/*
module.exports = function(input) {
    return input.toUpperCase()
}
*/
    
    
 
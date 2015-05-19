/*
 * Task 
 * Implement a function that takes a function as its first argument, a number 
 * num as its second argument, then executes the passed in function num times.
 * 
 * Arguments
 * operation: A Function, takes no arguments, returns no useful value.
 * num: the number of times to call `operation`.
 * 
 * Resources
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
 * 
*/

function repeat(operation, num) { 
    // SOLUTION GOES HERE
    var someOperation = operation(num);
    return someOperation;
    
    
} 

// Do not remove the line below 
module.exports = repeat

// Here's the official solution in case you want to compare notes:
/*
function repeat(operation, num) { 
    if (num <= 0) 
        return operation() 
        return repeat(operation, --num) 
} 

module.exports = repeat
*/
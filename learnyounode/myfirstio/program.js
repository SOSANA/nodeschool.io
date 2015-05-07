/*
 * All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'. To read a file, 
 * you'll need to use fs.readFileSync('/path/to/file'). This method will return a Buffer object containing 
 * the complete contents of the file.
 * 
 * Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, 
 * binary or some other format. Buffer objects can be converted to strings by simply calling the toString() 
 * method on them. e.g. var str = buf.toString(). 
 * NOTE you can avoid the .toString() by passing 'utf8' as the second argument to readFileSync, then you'll 
 * get a String! 
*/

var fs = require('fs')

// avoiding the .toString() by passing 'utf8' as the second argument to readFileSync
var contents = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
console.log(contents);


// or you could do it like this
/*
var fs = require('fs');

var fileName = process.argv[2];
var file = fs.readFileSync(fileName);
var contents = file.toString();
console.log(contents.split('\n').length - 1);
*/


// Here is the official solution
/*
var fs = require('fs')                                                                                                                        
                                                                                                                                                  
var contents = fs.readFileSync(process.argv[2])                                                                                        
var lines = contents.toString().split('\n').length - 1 
console.log(lines)
*/
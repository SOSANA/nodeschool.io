/*
 * process.argv is an array containing the command line arguments. The first element will 
 * be 'node', the second element will be the name of the JavaScript file. The next elements 
 * will be any additional command line arguments.
 * 
 * Be aware that all elements of process.argv are strings and you may need to coerce them into 
 * numbers. You can do this by prefixing the property with + or passing it to Number(). e.g. 
 * +process.argv[2] or Number(process.argv[2]).  
*/

var result = 0;

for (var i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
    // or you could right it like this
    //result += +process.argv[i];
}

console.log(result);




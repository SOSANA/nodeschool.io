var fs = require('fs');

var filename = process.argv[2];

var file = fs.readFile(filename, function(err, data) {
  console.log(data.toString().split('\n').length - 1);
});


/*var fs = require('fs')                                                                                              
    var file = process.argv[2]                                                                                          
                                                                                                                        
    fs.readFile(file, function (err, contents) {                                                                        
      // fs.readFile(file, 'utf8', callback) can also be used                                                           
      var lines = contents.toString().split('\n').length - 1                                                            
      console.log(lines)                                                                                                
    })*/
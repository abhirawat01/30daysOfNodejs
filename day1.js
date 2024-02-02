const fs = require('fs')

function readFileContent(filePath) {

   fs.readFile(filePath , 'utf8' , function(error, data){
    if (error){
        throw error;
    }
    console.log(data);
   })

}

readFileContent("file1.txt")
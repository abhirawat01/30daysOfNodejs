
const fs = require('fs')

function writeToFile(filePath, content) {
    
    fs.writeFile(filePath, content, function(err){
        if(err){
            return console.log(err)
        }
        else{
            return console.log(`Data written to ${filePath}`)
        }
    })

}

writeToFile('Day2/test-files/output1.txt', 'Sample content.');

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
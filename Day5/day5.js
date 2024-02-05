const path = require('path')

function checkFileExtension(filePath, expectedExtension) {
    
    const actual = path.extname(filePath);
    if (actual == expectedExtension){
        console.log(`File has the expected extension ${expectedExtension} `);
    }
    else{
        console.log(`\nFile does not have the expected extension. Expected: ${expectedExtension} , Actual: ${actual}`);
    }
}


checkFileExtension('test-files/file1.txt', '.txt');

checkFileExtension('test-files/img1.png', '.jpg');
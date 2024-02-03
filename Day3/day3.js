const {exec} = require('child_process')

function executeCommand(command) {
    
    exec(command, (error,stdout,stderr)=>{
        if(error){
            console.log(`Error execution command ${error.message}`);
        }
        else if(stderr){
            console.log(`Error: ${stderr}`);
        }
        else{
            console.log(stdout);
        }
    })

}

executeCommand('dir');

executeCommand('echo "Hello, Node.js!"');
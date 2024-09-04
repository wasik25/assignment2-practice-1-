const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (input) => {
    var number = parseInt(input);
  
    if (number % 2 === 0) 
    {
        console.log("Even");
    } 
    else if (number % 2 === 1 || number % 2 === -1) 
    { 
        console.log("Odd");
    } 
    else 
    {
        console.log("Nothing");
    }
  
    readline.close();
});


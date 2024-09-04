const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (input) => {
    var number = parseInt(input);

    if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) 
    {
        console.log(number + " is a leap year.");
    } 
    else 
    {
        console.log(number + " is not a leap year.");
    }
    readline.close();
});

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter your marks: ', (input) => {
    var marks = parseInt(input);
  
    if (marks > 0) 
    {
        if (marks < 33) 
        {
            console.log("Your grade is F");
        } 
        else if (marks >= 33 && marks <= 39) 
        {
        console.log("Your grade is E");
        } 
        else if (marks >= 40 && marks <= 49) 
        {
        console.log("Your grade is D");
        } 
        else if (marks >= 50 && marks <= 59) 
        {
        console.log("Your grade is C");
        } 
        else if (marks >= 60 && marks <= 69) 
        {
        console.log("Your grade is B");
        } 
        else if (marks >= 70 && marks <= 79) 
        {
        console.log("Your grade is A-");
        } 
        else if (marks >= 80 && marks <= 100) 
        {
        console.log("Your grade is A+");
        } 
        else 
        {
        console.log("Invalid number");
        }
    } 
    else 
    {
      console.log("Please try with a positive number.");
    }
  
    readline.close();
  });
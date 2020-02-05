// Syntax for console and file ouput
const readline = require('readline');

// Console configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Console input
user.question('Filename: ', function(filename) {
  console.log(filename);
})

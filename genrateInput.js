const fs = require('fs');

// Function to generate a random integer within a specified range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate test cases and save them to a file
function generateTestCases(numTestCases, fileName) {
  let data = `${numTestCases}\n`;
  
  // Generate random test cases
  for (let i = 0,numNodes=15; i < numTestCases; i++) {
    const n = getRandomInt(1, numNodes); // Length of the array
    data += `${n}\n`;
    for (let j = 0; j < n; j++) {
        const element = getRandomInt(0, 10); // Array element
        if (element === 0) {
          data += 'null '; // Representing null node
        } else {
          data += `${element} `;
        }
    }
    data += '\n';
  }
  
  // Write test cases to a file
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`Test cases have been saved to ${fileName}`);
  });
}

// Number of test cases
// const numTestCases = getRandomInt(1, 1000);
const numTestCases=500;

// File name to save the test cases
const fileName = 'input.txt';

// Generate and save the test cases
generateTestCases(numTestCases, fileName);

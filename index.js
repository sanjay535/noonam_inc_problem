const fs = require('fs');
const { buildTree } = require('./createBinaryTree');
const { solve } = require('./solution');
const { printSubTree1, printSubTree2, printTree, printTree2} = require('./printTree');


// Function to read input from file and process each test case
function processInput(fileName) {
  const input = fs.readFileSync(fileName, 'utf8').trim().split('\n');
//   console.log('input=',input)
  const numTestCases = parseInt(input[0]);
  let currentIndex = 1;

  for (let i = 0; i < numTestCases; i++) {
    const n = parseInt(input[currentIndex++]);
    const inputLevelOrderTravsal = input[currentIndex++].trim().split(' ');
    const levelOrderTraversal=inputLevelOrderTravsal.map(item=>item==='null'?null:Number(item))
    
    const root=buildTree(levelOrderTraversal)
    const splitNode=solve(root);
    // const subtree1LevelOrder=printSubTree1(splitNode)
    // const subtree2LevelOrder=printSubTree2(splitNode,root)
    console.log('INPUT: ')
    printTree(root)
    console.log('\nOUTPUT: ')
    console.log('SUBTREE 1: ')
    printTree(splitNode)
    console.log('SUBTREE 2: ')
    printTree2(splitNode,root)
    console.log('*'.repeat(100)+'\n')
  }
}

// Input file name
const fileName = 'input.txt';

// Process the input file
processInput(fileName);

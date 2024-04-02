const { buildTree } = require("./createBinaryTree");
const { printTree, printTree2 } = require("./printTree");
const { solve } = require("./solution");

function baseTestCase(){
    const testcase=[2, 1, 1, 4, 3, 3, 2, null, null, null, null, 1, null, null, null];
    const root=buildTree(testcase)
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
}

baseTestCase();
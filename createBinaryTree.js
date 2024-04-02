// Define the structure of a node in the binary tree
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

// using level order
function buildBinaryTree(arr) {
    // Base case for empty array
    if (arr.length === 0) {
      return null;
    }
  
    // Create a queue to hold nodes
    let queue = [];
  
    // Create the root node from the first element of the array
    let root = new Node(arr.shift());
    queue.push(root);
  
    while (arr.length > 0) {
      let currentNode = queue.shift();
  
      // Get the next two elements from the array
      let leftValue = arr.shift();
      let rightValue = arr.shift();
  
      // Create left child if exists
      if (leftValue !== null && leftValue !== undefined) {
        currentNode.left = new Node(leftValue);
        queue.push(currentNode.left);
      }
  
      // Create right child if exists
      if (rightValue !== null && rightValue !== undefined) {
        currentNode.right = new Node(rightValue);
        queue.push(currentNode.right);
      }
    }
  
    return root;
  }

//   recursivly
  function buildTree(arr, index=0) {
    if (index < arr.length && arr[index] !== null) {
        let root = new Node(arr[index]);
        root.left = buildTree(arr, 2 * index + 1);
        root.right = buildTree(arr, 2 * index + 2);
        return root;
    }
    return null;
}

  module.exports={buildBinaryTree,buildTree}
function solve(root) {
    let closestDiff = Infinity;
    let splitNode = null;
    const sumOfTree=sumOfNodes(root);

    function sumOfNodes(node){
        if (node === null) {
            return 0;
        }
    
        const leftSum = sumOfNodes(node.left);
        const rightSum = sumOfNodes(node.right);
    
        const subtreeSum = node.value + leftSum + rightSum;
        return subtreeSum;
    }

    function splitTree(root) {
        if (root === null) {
            return 0;
        }
    
        const leftSum = splitTree(root.left);
        const rightSum = splitTree(root.right);
    
        const subtreeSum = root.value + leftSum + rightSum;
        // what if we try all possibility like split tree on each Node and divide into 2 subtree then find the closest difference of Sum;
        const treeSum1=subtreeSum;
        const treeSum2=sumOfTree-subtreeSum;
        const sumDifferenceBetweenTree=Math.abs(treeSum1-treeSum2);
        // track subtree which divide with closest difference
        if(closestDiff>sumDifferenceBetweenTree){
            closestDiff=sumDifferenceBetweenTree;
            splitNode=root;
        }
        return subtreeSum;
    }
    splitTree(root);
    return splitNode;
}

module.exports={
    solve
}
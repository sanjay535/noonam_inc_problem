function printSubTree1(root) {

    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(currentLevel);
    }

    return result;

}
function printTree(root) {
    if (root === null) {
        return;
    }

    const printHelper = (node, prefix, isLeft) => {
        if (node) {
            if (isLeft === 'ROOT') {
                console.log(prefix + '(ROOT)' + node.value);
            } else {
                console.log(prefix + (isLeft ? '└── ' : '├── ') + node.value+(isLeft ? '(L) ' : '(R)') );

            }
            const newPrefix = prefix + (isLeft ? '    ' : '│   ');
            printHelper(node.left, newPrefix, true);
            printHelper(node.right, newPrefix, false);
        }
    };

    printHelper(root, '', 'ROOT');
}

function printTree2(splitNode, root) {
    if (root === null) {
        return;
    }

    const printHelper = (node, prefix, isLeft) => {
        if(node===splitNode){
            return;
        }
        if (node) {
            if (isLeft === 'ROOT') {
                console.log(prefix + '(ROOT)' + node.value);
            } else {
                console.log(prefix + (isLeft ? '└── ' : '├── ') + node.value+(isLeft ? '(L) ' : '(R)') );

            }
            const newPrefix = prefix + (isLeft ? '    ' : '│   ');
            printHelper(node.left, newPrefix, true);
            printHelper(node.right, newPrefix, false);
        }
    };

    printHelper(root, '', 'ROOT');
}

function printSubTree2(subtreeRoot1, root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node === subtreeRoot1) continue;

            currentLevel.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(currentLevel);
    }

    return result;
}

module.exports = { printSubTree1, printSubTree2, printTree,printTree2 }
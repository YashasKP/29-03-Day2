class Node{
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

var root = null;


function preorder(root){
    if (root == null){
        return;
    }

    console.log(root.key);
    preorder(root.left);
    preorder(root.right);
}


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("The preorder traversal of the given tree is: ")
console.log(preorder(root));

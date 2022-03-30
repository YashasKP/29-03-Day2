class Node{
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

var root = null;

function postorder(root){
    if (root == null){
        return;
    }

    postorder(root.left);
    postorder(root.right);
    console.log(root.key);
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("The postorder traversal of the given tree is: ")
console.log(postorder(root));
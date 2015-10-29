function Node(name, value){
    this.value = value;
    this.name = name;
}

Node.prototype.setLeft = {
    constructor: Node,

    left:function(left) {
        this.left = left;
    }
};

Node.prototype.setRight = {
    constructor: Node,

    right:function(right) {
        this.right = right;
    }
};

function insertNode(tree, node) {
    if (tree) {
        if (tree.value < node.value) {
            if (tree.right) {
                insertNode(tree.right, node);
            } else {
                //tree.setRight(node);
            }
        } else {
            if (tree.left) {
                insertNode(tree.left, node);
            } else {
                //tree.setLeft(node);
            }
        }
    } else {
        tree = node;
    }
    return tree;
}

function setup() {
    nodeA = new Node('a', 5);
    nodeB = new Node('b', 12);
    nodeC = new Node('c', 10);
    nodeD = new Node('d', 15);
    nodeE = new Node('e', 20);
    nodeF = new Node('f', 25);
    nodeG = new Node('g', 8);
    nodeH = new Node('h', 3);

    var tree = insertNode(tree, nodeA);
    tree = insertNode(tree, nodeB);
    tree = insertNode(tree, nodeC);
    tree = insertNode(tree, nodeD);
    tree = insertNode(tree, nodeE);
    tree = insertNode(tree, nodeF);
    tree = insertNode(tree, nodeG);
    tree = insertNode(tree, nodeH);
}

function printTreeAsc(root) {
    var currNode = root;
    if(currNode.left) {
        printTreeAsc(currNode.left);
    }

    console.log(currNode.value);

    if(currNode.right) {
        printTreeAsc(currNode.right);
    }
}

setup();
printTreeAsc(nodeA);

// IMPORTANT to connect files!!! solved error : Node is not a function
module.exports = {
    Node: Node
};

/*
function Tree(){
    this.memory = {}
}

Tree.prototype = {

    constructor: Tree,

    node: function node(data){
        var tree = this;
        return new Node(tree, data);
    },

    insert: function insert(node){
        if (this.memory[node.id]) return;

        this.memory[node.id] = {node: node, edges: []};
    },

    getNode: function getNode(id) {
        if (this.memory[id]) {
            return this.memory[id].node;
        }
    },

    edge: function edge(A, B){
        this.memory[A.id].edges.push({from: A, to: B})
        this.memory[B.id].edges.push({from: B, to: A})
    }

};

module.exports = {
    Tree: Tree
};
function Node(name, value) {
    this.name = name;
    this.value = value;
}

Node.prototype.setleft = {

    constructor: Node,

    left: function(left) {
    this.left = left;
    }
};

Node.prototype.setLeft = function(left) {
    this.left = left;
};

Node.prototype.setRight = function(right) {
    this.right = right;
};

function insertNode(tree, node) {
    if (tree) {
        if (tree.value < node.value) {
            if (tree.right) {
                insertNode(tree.right, node);
            } else {
                tree.setRight(node);
            }
        } else {
            if (tree.left) {
                insertNode(tree.left, node);
            } else {
                tree.setLeft(node);
            }
        }
    } else {
        tree = node;
    }
    return tree;
}

function setup() {
    nodeA = new Node('a', 5);
    nodeB = new Node('b', 12);
    nodeC = new Node('c', 10);
    nodeD = new Node('d', 15);
    nodeE = new Node('e', 20);
    nodeF = new Node('f', 25);
    nodeG = new Node('g', 8);
    nodeH = new Node('h', 3);

    var tree = insertNode(tree, nodeA);
    tree = insertNode(tree, nodeB);
    tree = insertNode(tree, nodeC);
    tree = insertNode(tree, nodeD);
    tree = insertNode(tree, nodeE);
    tree = insertNode(tree, nodeF);
    tree = insertNode(tree, nodeG);
    tree = insertNode(tree, nodeH);
}

function printTreeAsc(root) {
    var currNode = root;
    if(currNode.left) {
        printTreeAsc(currNode.left);
    }

    console.log(currNode.value);

    if(currNode.right) {
        printTreeAsc(currNode.right);
    }
}

setup();
printTreeAsc(nodeA);


*/



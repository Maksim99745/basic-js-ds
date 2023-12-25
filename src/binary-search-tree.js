const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.rooot = null;
  }


  root() {
    if (!this.rooot) {
      return null;
    }
    return this.rooot;
  }

  add(data) {

    const item = new Node(data);

    if (this.rooot === null) {
      this.rooot = item;
      return;
    } 

    let root = this.rooot;

    while(root) {
      if (item.data < root.data) {
        if (!root.left) {
          root.left = item;
          return;
        } 

        root = root.left;
      } else {
        if (!root.right) {
          root.right = item;
          return;
        } 

        root = root.right;
      }
    }
  }

  has(data) {
    let search = data;
    
    console.log(this.rooot);
    let root = this.rooot;

    if (root.data === null && search !== null) {
       return false;
    }

    if (root.data === search) {
       return true;
     }

     while (root) {

       if (root.data === data) {
         return true;
       }

       if (root.data > data) {
         root = root.left;
       } else {
         root = root.right;
       }
    }

    return false;

  }


  find(data) {
    let searchh = data;

    let root = this.rooot;


    if (root.data === searchh) {
       return root;
     }

     while (root) {

       if (root.data === searchh) {
         return root;
       }

       if (root.data > searchh) {
         root = root.left;
       } else {
         root = root.right;
       }
    }

    return null;
  }

  // remove(/* data */) {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }

  remove(data) {
    this.rooot = removeNome(this.rooot, data);

    function removeNome(node, data) {

    if (!node) {
      return null;
    }

    if (node.data > data) {
      node.left = removeNome(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = removeNome(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
    }

    if (!node.left) {
      node = node.right;
      return node;
    }

    if (!node.right) {
      node = node.left
      return node;
    }

    let minRight = node.right;
    while (minRight.left) {
      minRight = minRight.left;
    }

    node.data = minRight.data;

    node.right = removeNome(node.right, minRight.data);

    return node;
  }
}

  min() {
    let temp = this.rooot;
    if (temp.data === null) {
      return null;
    }

    while (temp.left !== null) {
      temp = temp.left;
    }

    return temp.data;
  }

  max() {
    let temp = this.rooot;
    if (temp.data === null) {
      return null;
    }

    if (temp.data !== null && !temp.right) {
      return temp.data;
    }
    while (temp.right !== null) {
      temp = temp.right;
    }

    return temp.data;
  }
}

module.exports = {
  BinarySearchTree
};
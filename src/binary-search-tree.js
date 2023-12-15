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
      if (item.value < root.value) {
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

  has(/* data */) {

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    // let root = this.rooot;

    // if (root === null && data !== null) {
    //   return false;
    // }

    // if (root.value === data) {
    //   return true;
    // }

    // while (root) {

    //   if (root.value === data) {
    //     return true;
    //   }

    //   if (root.value > data) {
    //     root = root.left;
    //   } else {
    //     root = root.right;
    //   }
    // }

    // return false;

  }


  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // let temp = this.rooot;
    // if (temp.value === null) {
    //   return null;
    // }

    // while (temp.left !== null) {
    //   temp = temp.left;
    // }

    // return temp.value;
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // let temp = this.root;
    // if (temp.value === null) {
    //   return null;
    // }

    // if (temp.value !== null && temp.right === null) {
    //   return temp.value;
    // }
    // while (temp.right !== null) {
    //   temp = temp.right;
    // }

    // return temp.value;
  }
}

module.exports = {
  BinarySearchTree
};
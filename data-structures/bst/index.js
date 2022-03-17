class BinarySearchTree {
  // Your code here!
  constructor (root) {
    this.value = root;
    this.left = null;
    this.right = null;
  }

  insert(newValue){
    if (newValue < this.value){
      if (!this.left){ // Base Case
        this.left = new BinarySearchTree(newValue);
      } else { // Recursive Case
        this.left.insert(newValue);
      }
    } else if (newValue > this.value){
      if (!this.right){ // Base Case
        this.right = new BinarySearchTree(newValue);
      } else { // Recursive Case
        this.right.insert(newValue);
      }
    }
    return newValue;
    /* // Another In Progress
    if (this.value == newValue){
      return this.value;
    } else {
      let child = newValue < this.value ? this.left : this.right;
      if (!child) {
        child = new BinarySearchTree(newValue);
      } else {
        child.insert(newValue);
      }
    }
    */
  }

  contains(value){
    if (this.value === value){ // Base Case
      return true
    } else { // Recursive Case
      let child = value < this.value ? this.left : this.right;
      return child ? child.contains(value) : false;
      /* // Another Solution
      if (value < this.value){
        return this.left ? this.left.contains(value) : false;
      }
      if (value > this.value){
        return this.right ? this.right.contains(value) : false;
      }
      */
    }
    
  }

}

module.exports = BinarySearchTree
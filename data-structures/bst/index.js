class BinarySearchTree {
  // Your code here!
  constructor (root) {
    this.value = root;
    this.left = null; // Less than root value
    this.right = null; // Greater than or duplicate root value
  }

  insert(newValue){
    if (newValue < this.value){ // Left side insert, less than
      if (!this.left){ // Base Case
        this.left = new BinarySearchTree(newValue);
      } else { // Recursive Case
        this.left.insert(newValue);
      }
    } else { // Right side insert, greater than or duplicate
      if (!this.right){ // Base Case
        this.right = new BinarySearchTree(newValue);
      } else { // Recursive Case
        this.right.insert(newValue);
      }
    }
    return newValue;
    /* // Another Solution
    if (newValue < this.value){ // Left side insert, less than
      if (!this.left) return this.left = new BinarySearchTree(newValue); // Base Case
      this.left.insert(newValue); // Recursive case
    } else { // Right side insert, greater than or duplicate
      if (!this.right) return this.right = new BinarySearchTree(newValue); // Base Case
      this.right.insert(newValue); // Recursive case
    }
    return newValue;
    */
  }

  contains(value){
    if (this.value == value){ // Base Case
      return true
    } else { // Recursive Case
      let child = value < this.value ? this.left : this.right; // Side to check
      return child ? child.contains(value) : false;
      /* // Another Solution
      if (value < this.value){ // Left side check, less than
        return this.left ? this.left.contains(value) : false;
      } else { // Right side check, greater than or duplicates
        return this.right ? this.right.contains(value) : false;
      }
      */
    }
    
  }

}

module.exports = BinarySearchTree
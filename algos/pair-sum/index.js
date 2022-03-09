function pairSum(arr, sum){
	// Complete the function!
	// add two diff numbers in array together
	// compare with target
	for (let i = 0; i < arr.length; i++){ // O(n)
		for (let j = 0; j < arr.length; j++) { // O(n)
			if (i != j) {  // O(1)
				if (arr[i] + arr[j] === sum) return true; // O(1)
			}
		}
	}
	return false; // O(1)
} // O(n^2) Algorithm

module.exports = pairSum
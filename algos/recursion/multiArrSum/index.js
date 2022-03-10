function multiDimSum(arr) {
    // Add integers in array together, including in nested arrays
    // empty array = 0
    if (arr.length === 0) return 0; // O(1)
    else {
        // remove & return 1st element
        let num1 = arr.shift(); // O(n)
        // drill into nested array
        if (Array.isArray(num1)) num1 = multiDimSum(num1); // O(n)
        // add first element to next
        return num1 + multiDimSum(arr); // O(n)
    } // O(n) solution
    
    
    /* // Alternative solution
    let sum = 0; // O(1)
    for (let i = 0; i < arr.length; i++){
        // add next integer
        if (typeof arr[i] === 'number') sum += arr[i]; // O(n)
        else { // add next array
            sum += multiDimSum(arr[i]); // O(n)
        }
    }
    return sum; // O(1)
    */ // O(n) solution
}

module.exports = multiDimSum
function multiDimSum(arr) {
    // Add integers in array together, including in nested arrays, empty array = 0
    // Recursive solution
    if (arr.length === 0) return 0; // Base Case, O(1)
    else { // Recursive Case
        // remove & return 1st element
        let num1 = arr.shift(); // O(n)
        // drill into nested array
        if (Array.isArray(num1)) num1 = multiDimSum(num1); // O(n)
        // add first element to next
        return num1 + multiDimSum(arr); // O(n)
    } // O(n) solution NOT n^2
    
    
    /* // Alternative solution
    let sum = 0; // O(1)
    for (let i = 0; i < arr.length; i++){
        // add next integer
        if (typeof arr[i] === 'number') sum += arr[i]; // Base Case, O(n)
        else { // add next array
            sum += multiDimSum(arr[i]); // Recursive Case, O(n)
        }
    }
    return sum; // O(1)
    */ // O(n) solution
}

module.exports = multiDimSum
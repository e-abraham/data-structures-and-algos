function countdown(n){
    // String counts down from n, replace 0 with Liftoff! neg n goes straight to Liftoff!
    // Join each string to the next separated by comma space
    // Recursive solution
    if (n <= 0) { // Base Case
        return "Liftoff!"; // O(1)
    } else { // Recursive Case
        return `${n}, ` + countdown(n-1); // O(n)
    } // O(n) solution

}

// function countdown(n){
// 	let str = '';
// 	for(let i = n; i > 0; i--){
// 		str += `${i}, `
// 	}
// 	str += 'Liftoff!'
// 	return str
// }

module.exports = countdown
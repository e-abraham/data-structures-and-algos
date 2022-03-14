function countdown(n){
    // String counts down from n, replace 0 with Liftoff!
    // Join each string to the next separated by comma space
    // neg n goes straight to Liftoff!
    if (n <= 0) {
        return "Liftoff!"; // O(1)
    } else {
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
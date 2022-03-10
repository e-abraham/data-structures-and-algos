function isPalendrome(str){
	// Complete the function!
	let revStr = str.split('').reverse().join('');
	console.log(`string: ${str} \n reverse: ${revStr}`);
	return str === revStr;
	

	/* // Alternative solution
	let first, last;
	while (str.length > 1){
		first = str[0];
		last = str[str.length - 1];
		if (first != last) return false;
		str = str.slice(1, str.length - 1);
	}
	return true;
	*/

	// Recursive solution
	
	if (str.length <= 1) return true; // O(1)
	else {
		let first = str[0]; // O(1)
		let last = str[str.length - 1]; // O(1)
		if (first != last) return false; // O(1)
		return isPalendrome(str.slice(1, str.length - 1)); // O(n/2)
	}
	// O(n) solution
}


function isPermutationPalendrome(str){
	// Complete the function!

}

module.exports = {isPalendrome, isPermutationPalendrome}
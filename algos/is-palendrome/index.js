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
}


function isPermutationPalendrome(str){
	// Complete the function!

}

module.exports = {isPalendrome, isPermutationPalendrome}
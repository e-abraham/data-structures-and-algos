function isPalendrome(str){
	// Complete the function!
	let revStr = str.split('').reverse().join('');
	console.log(`string: ${str} \n reverse: ${revStr}`);
	if (str === revStr) {
		return true;
	} else {
		return false;
	}
}


function isPermutationPalendrome(str){
	// Complete the function!

}

module.exports = {isPalendrome, isPermutationPalendrome}
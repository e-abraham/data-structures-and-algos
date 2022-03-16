class Stack {
	// Your code below!
	constructor(){
		this.elements = [];
		this.size = 0;
	}

	push(element){
		this.elements.push(element);
		this.size = this.elements.length;
		/* // Alternative immutable solution
		// set to new array add first, use spreader to include previous
		this.elements = [element, ...this.elements];
		this.size = this.elements.length;
		*/
	}

	pop(){
		let last = this.elements.pop();
		this.size = this.elements.length;
		return last;
		/* // Alternative immutable solution
		// set to new array of previous skipping first
		let first = this.elements[0];
		this.elements = this.elements.slice(1);
		this.size = this.elements.length;
		return first;
		*/
	}
}

module.exports = Stack
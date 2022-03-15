class Stack {
	// Your code below!
	constructor(){
		this.elements = [];
		this.size = 0;
	}

	push(element){
		this.elements.push(element);
		this.size = this.elements.length;
	}

	pop(){
		let last = this.elements.pop();
		this.size = this.elements.length;
		return last;
	}
}

module.exports = Stack
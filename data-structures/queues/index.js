class Queue {
	// Your code below!
	constructor() {
		this.elements = [];
		this.size = 0;
	}

	enqueue(element){
		this.elements.push(element);
		this.size = this.elements.length;
		/* // Alternative immutable solution
		// set to new array add at end, use spreader to include previous
		this.elements = [...this.elements, element];
		this.size = this.elements.length;
		*/
	}

	dequeue(){
		let first = this.elements.shift();
		this.size = this.elements.length;
		return first;
		/* // Alternative immutable solution
		// set to new array of previous skipping first
		let first = this.elements[0];
		this.elements = this.elements.slice(1);
		this.size = this.elements.length;
		return first;
		*/
	}
}

module.exports = Queue
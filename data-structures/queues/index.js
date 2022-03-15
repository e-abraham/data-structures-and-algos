class Queue {
	// Your code below!
	constructor() {
		this.elements = [];
		this.size = 0;
	}

	enqueue(element){
		this.elements.push(element);
		this.size = this.elements.length;
	}

	dequeue(){
		let first = this.elements.shift();
		this.size = this.elements.length;
		return first;
	}
}

module.exports = Queue
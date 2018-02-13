
let brain;

function setup() {
	createCanvas(windowWidth, windowHeight);
	let  m = new Matrix(2,2)
	m.randomize()
	m.print()
	m.map(doubleIt)
	m.print()


	function doubleIt(x) {
		return x * 2
	}
}

function draw() {

}
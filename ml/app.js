var points = new Array(500)
var currentIndex = 0;
var p;


function setup() {
    createCanvas(400,400);
    p = new Perceptron(3)

    for (var i = 0; i < points.length; i++) {
        points[i] = new Point()
    }

    // var inputs = [-1, 0.5];
    // var guess = p.guess(inputs)
    // console.log(guess)
    pixelDensity(1)
}

function draw() {
    background(255)
    stroke(0)
    // line(0, height, width, 0)
    var p1 = new Point(-1, f(-1))
    var p2 = new Point(1, f(1))
    // var x1 = -1;
    // var y1 = f(x1);
    // var x2 = 1;
    // var y2 = f(x2);

    line(p1.pixelX(), p1.pixelY(), p2.pixelX(), p2.pixelY())


    var p3 = new Point(-1, p.guessY(-1));
    var p4 = new Point(1, p.guessY(1));

    stroke(255,0,0)
    line(p3.pixelX(), p3.pixelY(), p4.pixelX(), p4.pixelY())
    


    
    points.forEach(pt=> {
        pt.show()
    })

    var currentPoint = points[currentIndex]
    var inputs = [currentPoint.x, currentPoint.y, currentPoint.bias]
    var target = currentPoint.label
    p.train(inputs, target)
    currentIndex++

    if(currentIndex == points.length) {
        currentIndex = 0;
    }

    console.log(p.weights)
    // stroke(255,0,0);
    // line(0, 0, p.weights[0], p.weights[1])

    points.forEach(pt=> {
        var inputs = [pt.x, pt.y, pt.bias]
        var target = pt.label
        var guess = p.guess(inputs)
        if (guess == target) {
            fill(0,255,0);
        } else {
            fill(255,0,0)
        }
        noStroke();
        ellipse(pt.pixelX(), pt.pixelY(), 4,4)
    })

}

// function mousePressed() {
//     points.forEach(pt=> {
//         var inputs = [pt.x, pt.y]
//         var target = pt.label
//         p.train(inputs, target)
//         var guess = p.guess(inputs)
//         if (guess == target) {
//             fill(0,255,0);
//         } else {
//             fill(255,0,0)
//         }
//         noStroke();
//         ellipse(pt.x, pt.y, 4,4)
//     })
// }
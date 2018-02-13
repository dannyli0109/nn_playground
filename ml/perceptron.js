function sign(n) {
    if (n >= 0) {
        return 1;
    } else {
        return -1;
    }
} 

function Perceptron(n) {
    this.weights = new Array(n)
    this.lr = 0.001

    for (var i = 0; i < this.weights.length; i++) {
        this.weights[i] = random(-1, 1);
    }
    console.log(this.weights)


}

Perceptron.prototype.guess = function(inputs) {
    var sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
        sum += inputs[i]*this.weights[i];
    }

    return sign(sum)
    
}

Perceptron.prototype.train = function(inputs, target) {
    var guess = this.guess(inputs);
    var error = target - guess;

    for (var i = 0; i < this.weights.length; i++) {
        this.weights[i] += error * inputs[i] * this.lr;
    }
}


Perceptron.prototype.guessY = function(x) {
    // var m = 
    // var m = this.weights[0] / this.weights[1]
    // var b  = this.weights[2];
    // return m * x + b;
    
    var w0 = this.weights[0]
    var w1 = this.weights[1]
    var w2 = this.weights[2]

    return -(w2/w1) - (w0/w1) * x
}


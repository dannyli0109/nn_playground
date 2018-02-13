function f(x) {
    // y = mx + b
    return -5 * x + 0.5;
}


function Point(x = random(-1,1), y = random(-1,1)) {
    this.x = x;
    this.y = y;
    this.bias = 1;

    var lineY = f(x)

    if (this.y >= lineY) {
        this.label = 1;
    } else {
        this.label = -1;
    }
}

Point.prototype.pixelX = function() {
    return map(this.x, -1, 1, 0, width)
}

Point.prototype.pixelY = function(){
    return map(this.y, -1, 1, height, 0)
}

Point.prototype.show = function() {
    stroke(0);
    if (this.label == 1) {
        fill(255);
    } else {
        fill(0)
    }

    var px = this.pixelX()
    var py = this.pixelY()

    ellipse(px, py, 8, 8)
}
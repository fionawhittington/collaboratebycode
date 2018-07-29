// This file is used to interface with whatever
// canvas library we use. This is so that we can call all sorts of
// methods to build canvas shapes, without needing to tear out a
// library from multiple files, if we switch libraries

function CanvasManager(element, extraParams) {
    var params = {
        width: 600,
        height: 400
    };

    if (extraParams) params = Object.assign({}, params, extraParams)

    this.canvas = new Two(params).appendTo(element);
}

// Removes all shapes from the canvas
CanvasManager.prototype.clear = function() {
    this.canvas.clear();
}

CanvasManager.prototype.update = function() {
    this.canvas.update();
}

CanvasManager.prototype.draw = function(shape, attrs) {
    const shapes = {
        "rectangle": Two.Rectangle,
        "ellipse": Two.Ellipse,
        "polygon": Two.Polygon
    };

    var shape = new shapes[shape](...attrs);
    this.canvas.add(shape);

    return shape;
}
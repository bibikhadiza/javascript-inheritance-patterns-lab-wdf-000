function Point(arg1, arg2){
  this.x = arg1;
  this.y = arg2;
}

var p = new Point(1,1)
Point.prototype.toString = function(){
  return this.x + "," + " " + this.y
}

function Side(num){
  this.length = num
}


function Shape(){
}


Shape.prototype.addToPlane = function(x, y){
  return this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y){
  return this.move = this.addToPlane(x, y)
}

function Circle(x){
  this.radius = x
}


Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function(){
  return this.radius * 2;
}


Circle.prototype.area = function(){
  return Math.PI * this.radius^2;
}

Circle.prototype.circumference = function(){
  return 2 * Math.PI * this.radius;
}

function Polygon(arr){
  this.arr = arr
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function(){
  return this.arr.reduce(function(a, b){
    return a + b.length;
  }, 0)

}

Polygon.prototype.numberOfSides = function(){
  return this.arr.length
}

function Quadrilateral(a, b, c, d){
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)])
}


Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


function Rectangle(x, y){
  this.width = x;
  this.height = y;
  Quadrilateral.call(this, x, y, x, y)

}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
  return this.height * this.width;
}


function Square(x){
  Rectangle.call(this, x, x)

}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function(){
  return this.hasManyProperties
}


function Triangle(x, y, z){
  Polygon.call(this, [new Side(x), new Side(y), new Side(y)] )
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

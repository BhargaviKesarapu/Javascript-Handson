
/* 2)	Create an Interface called “Shape” with a method called “calculateArea” that return 
     the area of the shape. Implement this interface in classes for different 
    shapes like “Rectangle” and “Circle” and provide necessary implementation for the “calculateArea” method. */
    
interface Shape{

    calculateArea() : number;
}

class Rectangle implements Shape{
    length : number;
    width : number ;
    constructor(length : number, width: number){
        this.length =length ;
        this.width = width;
    }
    calculateArea() : number {
        const areaRect = this.length * this.width;
        return areaRect ;
    }
}

class Circle implements Shape{
    radius : number;
    constructor(radius : number){
        this.radius = radius;
    }
    calculateArea(): number {
        const pi = 3.14;
        const area = pi * this.radius * this.radius ;
        return area ;
    }
}

let object = new Rectangle(12,10);
const areaRectangle = object.calculateArea();
console.log(`The area of Rectangle is : ${areaRectangle}`);

let object2 = new Circle(6);
const areaCircle = object2.calculateArea();
console.log(`The area of Circle is :" ${areaCircle}`);


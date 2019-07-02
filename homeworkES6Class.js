class Shape {
    constructor(id){
        this.id = id
        this.x
        this.y
    }

    move(x, y) {
        this.x = x
        this.y = y
    }
}

class Rectangle extends Shape{
    constructor(width, height) {
        super('Rectangle')
        this.width = width
        this.height = height
    }
}

class Circle extends Shape{
    constructor(radius) {
        super('Circle')
        this.radius = radius        
    }
}

class Eye extends Circle{
    constructor(radius, color) {
        super(radius)
        this.color = color        
    }

    roll(rollAmount){
        this.move(this.radius, rollAmount)
    }
}

let _eye = new Eye(10, 'Red')
_eye.roll(5);
console.log(_eye);
console.log(_eye.x);


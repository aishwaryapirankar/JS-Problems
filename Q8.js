// Write a class Cuboid with methods surfaceArea and volume and extend class Cube

console.log("===============Q8================")

// Parent class
class Cuboid{
    constructor(length , width , height){
        this.length = length
        this.width = width
        this.height = height
    }

    surfaceArea(){
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
    }

    volume(){
        return this.length * this.width * this.height
    }
}

// Child Class
class Cube extends Cuboid{
    constructor(length){
        super(length)
    }
    surfaceArea(){
       return 6 * this.length * this.length
    }
    volume(){
        return Math.pow(this.length, 3)
    }
}

// For Cuboid
let cuboidSurfaceArea = new Cuboid(5,10,15)

console.log("Surface Area of Cuboid :", cuboidSurfaceArea.surfaceArea())
console.log("Volume of Cuboid:", cuboidSurfaceArea.volume())

console.log("------------------------------")

// For Cube
let cubearea = new Cube(5)

console.log("Surface Area of Cube:", cubearea.surfaceArea())
console.log("Volume of Cube:", cubearea.volume())
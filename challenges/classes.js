// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker{
  
  constructor(length, width, height){

    this.length = length;

    this.width = width;

    this.height = height;
  }

  volume(){
    return this.length * this.width * this.height;
  }

  surfaceArea(){
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }



};


const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker {

  constructor(cube){

    super(cube);

    this.length = cube.length;
    this.width = cube.width;
    this.height = cube.height;
    
  }

  cubeSurfaceArea(){
    return 6 * (Math.pow(this.length, 2));
  }

  cubeVolume(){
    return Math.pow(this.length, 3);
  }
};

const cube1 = new CubeMaker({
  length: 5,
  width: 5,
  height: 5,
});

console.log(cube1.cubeSurfaceArea());
console.log(cube1.cubeVolume());

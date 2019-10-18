// Had to rename class and new object due to conflict with prototype class/object names.

class CuboidMaker2 {
    constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker2 {
    constructor(cubeAttributes) {
        super(cubeAttributes);
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 6 * (this.length * this.length);
    }
}

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  });

const cube = new CubeMaker({
    length: 6,
    height: 6,
    width: 6
});


  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid2.volume()); // 100
  console.log(cuboid2.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube.volume()); // 216
console.log(cube.surfaceArea()); // 216
// 1. Copy and paste your prototype in here and refactor into class syntax.
class Cuboidmaker {
    constructor(element){
        this.length = element.length;
        this.width = element.width;
        this.height = element.height;
         
    }


  volume(){ ;
    return this.length * this.width * this.height;
  }

  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}
  const cuboid = new CuboidMaker({
       
    length: 4,    
    height: 5,
    width: 5,  
    
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker{
    constructor(childElement) {
        super(childElement);
    }
    volume(){ ;
        return this.length * this.width * this.height;
      }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
      };  

}
const cubes = new CuboidMaker({
    length: 2,    
    height: 2,
    width: 2,  
    
});
console.log(cubes.volume()); 
 console.log(cubes.surfaceArea());

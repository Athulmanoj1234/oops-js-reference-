
class Frameworks{
    constructor(frameName, difficultyLevel){
        this.frameName = frameName;
        this.difficultyLevel = difficultyLevel;
    }
}

const frameWork1 = new Frameworks("Node.js", 7);
const frameWork2 = new Frameworks("Nest.js", 9);

console.log(frameWork1.frameName); //tells the frameNameof first framework
console.log(frameWork2.frameName); //tells the frameNmae of second framework
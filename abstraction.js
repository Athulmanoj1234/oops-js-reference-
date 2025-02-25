class FrameWorks{
    constructor(framName, difficultyLevel){
        this.framName = framName;
        this.difficultyLevel = difficultyLevel;
        this.endLevel = "";
    }

    //declaring methods to access this variables inside the class
    getFrameName = () => {
        return this.framName;  //this.framName defines current instance
    }
    getFrameDifficulty = () => {
        return this.difficultyLevel;
    }
    //we dont want to see the constructor class so we are setting the level to the framework
    setFrameWork = (endLevel) => {
        this.endLevel = endLevel;
    }
}

//creating new class and we are adding one more parameters
class Javascript{
    constructor(orientation, useCase, frameWorks){
        this.orientation = orientation;
        this.useCase = useCase;
        this.frameWorks = frameWorks;
    }
    
    getOrientation = () => {
        return this.orientation;
    }
    getUseCase = () => {
        return this.useCase;
    }
    getFrameWorks = () => {
        return this.frameWorks;
    }

    //we are adding newFrameworks
    addFrameWorks = (fram3) => {
        this.frameWorks.push(fram3); //fram3 ie new framework is pushed to current frameworks array
    } //we cannot return a function we can return only value
}

const frame1 = new FrameWorks("React.js", 6);
const frame2 = new FrameWorks("next.js", 8);
//console.log(frame1.getFrameName()

const js = new Javascript("procedural oriented", "Web Application", [frame1, frame2]);
const frame3 = new FrameWorks("elctron.js", 9);

js.addFrameWorks(frame3);
frame3.setFrameWork("backend"); //we have setted the frameworks from here not as new instance parameter and passed to constrructor argument
console.log(js.getFrameWorks());


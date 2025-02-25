class FrameWorks{
    constructor(framName, difficultyLevel){
        this.framName = framName;
        this.difficultyLevel = difficultyLevel;
    }

    //declaring methods to access this variables inside the class
    getFrameName = () => {
        return this.framName;  //this.framName defines current instance
    }
    getFrameDifficulty = () => {
        return this.difficultyLevel;
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
//console.log(frame1.getFrameName());

//creating new instance(object) for javascript main programming language and we are passing fram1 and fram2 as two elements in array as third argument
const js = new Javascript("procedural oriented", "Web Application", [frame1, frame2]);
//now we only try to get frameworks array elements only
console.log("frameworks array before pushed the third framwork:"+js.getFrameWorks());

//we are creating new framework by calling method in js object
const frame3 = new FrameWorks("elctron.js", 9);
js.addFrameWorks(frame3);
console.log(js.getFrameWorks());
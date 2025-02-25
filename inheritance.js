class FrameWorks{
    constructor(userName, userAge, framName, difficultyLevel){
        this.framName = framName;
        this.difficultyLevel = difficultyLevel;
        this.endLevel = "";
        this.userName = userName;
        this.userAge = userAge;
    }

    //declaring methods to access this variables inside the class
    getFrameName = () => {
        console.log("you are receiving framename by sub class called programmer called ${}");
    }
    getFrameDifficulty = () => {
        return this.difficultyLevel;
    }
    getUserName = () => {
        return this.userName;
    }
    //we dont want to see the constructor class so we are setting the level to the framework
    setFrameWork = (endLevel) => {
        this.endLevel = endLevel;
    }
}

class Programmer extends FrameWorks{
    constructor(userName, userAge){
        super(userName, userAge); //we are sending name and age to the super class
    }
    getFramWorkDetails = () => {
        console.log(`you are listening to the framework of the user ${this.getUserName()}`); //we are accessing the name from the userName from the super class
    }
}

const programmer = new Programmer("athul", 21);
console.log(programmer.getFramWorkDetails());




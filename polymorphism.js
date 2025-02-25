class Cars{
    carVariants = () => {
            console.log("these are related to car variants");
    }
}

class Porshe extends Cars{
    carVariants = () => {
        console.log("this variant is related to porshe");
    }
}

class Bmw extends Cars{
    carVariants = () => {
        console.log("this variantis related to bmw");
    }
}


const porshe = new Porshe();
const bmw = new Bmw();

//now the car variants for each cars will be displayed in many forms by one piller or concept of polymorphism
porshe.carVariants();
bmw.carVariants();
// Your code here

class Cat{
    constructor(catName, gender){
        this.catName = catName;
        this.gender = gender;
    }
    speak(){
        return `${this.catName} says meow!`
    }
}

class Dog{
    constructor(dogName, gender){
        this.dogName = dogName;
        this.gender = gender;
    }
    speak(){
        return `${this.dogName} says woof!`
    }
}

class Bird{
    constructor(birdName, gender){
        this.birdName = birdName;
        this.gender = gender;
    }
    speak(){
        if (this.gender === "male"){
            return `It's me! ${this.birdName}, the parrot!`
        }

        return `${this.birdName} says squawk!`
    }
}

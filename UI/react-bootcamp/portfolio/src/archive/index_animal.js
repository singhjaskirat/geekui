import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Import from local location

//ReactDOM.render(<div>React Element</div>, document.getElementById('root') );
ReactDOM.render(<App></App>, document.getElementById('root') );


class Animal {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log("I am "+ this.name);
        console.log("I am "+ this.age +" years old.");
    }
}

class Lion extends Animal {
    constructor(name, age, furColor, speed){
        super(name,age);

        this.furColor = furColor;
        this.speed = speed;
    }

    roar(){
        console.log("I am lion with name "+ this.name);
        console.log("I am "+ this.age +" years old.");

    }
}


const animal1 = new Lion("Simba", 3);
//const animal1 = new Animal("Simba", 3);

animal1.roar();
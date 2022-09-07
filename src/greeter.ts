export class Greeter{
    greeting: string;

    constructor(greeting: string){
        this.greeting = greeting;
    }
    greet(name: string){
        return `${this.greeting} ${name}!`;
    }
};

const myGreeting = new Greeter('Howdy,');
console.log(myGreeting.greet('Jake'));


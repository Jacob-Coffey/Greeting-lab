import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter{
    private extra: string = '!';

    addVolume():void {
        this.extra += '!';
    }
    greet(name: string){
        let initial = `${this.greeting} ${name}!`;
        return initial += this.extra;
    }
};

const myGreeting = new LoudGreeter('Howdy,');
myGreeting.addVolume();
console.log(myGreeting.greet('Jacob'));
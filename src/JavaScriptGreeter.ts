import { Greeter } from "./greeter";
export class JavaScriptGreeter extends Greeter {

    greet(name: string){
        return `console.log("${this.greeting} ${name}!")`;
   }
};

const myGreeting = new JavaScriptGreeter('Howdy,');
console.log(myGreeting.greet('Jakeyy'));
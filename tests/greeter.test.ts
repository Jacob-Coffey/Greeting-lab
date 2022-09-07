import { Greeter } from "../src/greeter";

describe("Formulate a proper greeting", () => {
    test("Name Jacob + greeting. ", () => {
        const myGreeting = new Greeter('Howdy,');        
      expect(myGreeting.greet("Jacob")).toEqual("Howdy, Jacob!");
    });
    test("Name John + greeting. ", () => {
        const myGreeting = new Greeter('Howdy,');  
      expect(myGreeting.greet("John")).toEqual("Howdy, John!");
    });
    test("Name Josh + greeting. ", () => {
        const myGreeting = new Greeter('Well hello there,');
      expect(myGreeting.greet("Josh")).toEqual("Well hello there, Josh!");
    });
});
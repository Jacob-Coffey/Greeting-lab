import { LoudGreeter } from "../src/LoudGreeter";

describe("Formulate a proper greeting", () => {
    test("Name Jacob + greeting. ", () => {
        const myGreeting = new LoudGreeter('Howdy,');
      expect(myGreeting.greet('Jacob')).toEqual("Howdy, Jacob!!");
    });
    test("Name John + greeting. ", () => {
        const myGreeting = new LoudGreeter('Howdy,');
      expect(myGreeting.greet('John')).toEqual("Howdy, John!!");
    });
    test("Name Josh + greeting + addVolume(). ", () => {
        const myGreeting = new LoudGreeter('Howdy,');
        myGreeting.addVolume();
      expect(myGreeting.greet('Josh')).toEqual("Howdy, Josh!!!");
    });
    test("Name Josh + greeting + addVolume() 3 times ", () => {
        const myGreeting = new LoudGreeter('Howdy,');
        myGreeting.addVolume();
        myGreeting.addVolume();
        myGreeting.addVolume();
        myGreeting.addVolume();
        myGreeting.addVolume();
        myGreeting.addVolume();
      expect(myGreeting.greet('Josh')).toEqual("Howdy, Josh!!!!!!!!");
    });

});
import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("Formulate a proper greeting", () => {
    test("Name Jacob + greeting. ", () => {
        const myGreeting = new JavaScriptGreeter('Howdy,');
      expect(myGreeting.greet("Jacob")).toEqual('console.log(\"Howdy, Jacob!\")');
    });

    test("Name John + greeting. ", () => {
        const myGreeting = new JavaScriptGreeter('Howdy,');
      expect(myGreeting.greet("John")).toEqual('console.log(\"Howdy, John!\")');
    });

    test("Name Josh + greeting. ", () => {
        const myGreeting = new JavaScriptGreeter('Well hello there,');
      expect(myGreeting.greet("Josh")).toEqual('console.log(\"Well hello there, Josh!\")');
    });
});
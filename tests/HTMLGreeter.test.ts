import { HtmlGreeter } from "../src/HTMLGreeter";

describe("Formulate a proper greeting", () => {
    test("Name Jacob + greeting. ", () => {
        const myGreeting = new HtmlGreeter('Howdy,', 'h3');
      expect( myGreeting.greet("Jacob")).toEqual("<h3>Howdy, Jacob!</h3>");
    });
    test("Name Gerald + greeting. ", () => {
      const myGreeting = new HtmlGreeter('Howdy,');
    expect( myGreeting.greet("Gerald")).toEqual("<h1>Howdy, Gerald!</h1>");
  });
});
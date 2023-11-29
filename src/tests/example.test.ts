import * as ExampleService from "../apis/example/exampleService.js";

test("Example test", async () => {
  expect(await ExampleService.getExample()).toBe("Hello world from /example");
});

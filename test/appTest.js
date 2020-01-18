const assert = require("chai").assert;
const app = require("../app");

describe("app", () => {
  it("should return hello world", () => {
    assert.equal(app(), "hello world");
  });
});

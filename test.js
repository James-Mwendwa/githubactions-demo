import { addNumbers } from "./app.js";
import { expect } from "chai";

//tests
describe("addNumbers", function () {
  it("should return the sum of [20, 30, 10, 50] as 110", function () {
    expect(addNumbers([20, 30, 10, 50])).to.equal(110);
  });

  it("should return 0 for an empty array", function () {
    expect(addNumbers([])).to.equal(0);
  });

  it("should return the sum of negative numbers [-1, -2, -3, -4] as -10", function () {
    expect(addNumbers([-1, -2, -3, -4])).to.equal(-10);
  });

  it("should return the single element 5 for [5]", function () {
    expect(addNumbers([5])).to.equal(5);
  });

  it("should return 0 for mixed positive and negative numbers [1, -1, 2, -2, 3, -3]", function () {
    expect(addNumbers([1, -1, 2, -2, 3, -3])).to.equal(0);
  });

  it("should return 0 when no argument is passed", function () {
    expect(addNumbers()).to.equal(0);
  });
});

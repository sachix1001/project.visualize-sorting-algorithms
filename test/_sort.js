const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should return a sorted array", () => {
    const input = [6, 5, 3, 1, 8, 7, 2, 4];
    const array = new Sort(input);
    expect(array.sort()).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

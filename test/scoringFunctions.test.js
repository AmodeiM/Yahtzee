import assert from "assert";
import fullHouse from "../src/components/scoring/fullHouse.js";

describe("Scoring Functions", function () {
  describe("Full House", function () {
    it("should return 25 when the dice read 44455", function () {
      const dice = [
        { side: 4 },
        { side: 4 },
        { side: 4 },
        { side: 5 },
        { side: 5 },
      ];
      assert.equal(fullHouse(dice), 25);
    });
    it("should return 0 when the dice read 12345", function () {
      const dice = [
        { side: 1 },
        { side: 2 },
        { side: 3 },
        { side: 4 },
        { side: 5 },
      ];
      assert.equal(fullHouse(dice), 0);
    });
  });
  describe("Matches", function () {});
  describe("Of A Kind", function () {});
  describe("Straight", function () {});
});

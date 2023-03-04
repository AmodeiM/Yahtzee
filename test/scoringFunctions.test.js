import assert from "assert";
import fullHouse from "../src/components/scoring/fullHouse.js";
import matches from "../src/components/scoring/matches.js";
import ofAKind from "../src/components/scoring/ofAKind.js";
import straight from "../src/components/scoring/straight.js";

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

  describe("Matches", function () {
    it("should return 2 when dice read 11234", function () {
      const dice = [
        { side: 1 },
        { side: 1 },
        { side: 2 },
        { side: 3 },
        { side: 4 },
      ];
      assert.equal(matches(dice, 1), 2);
    });
    it("should return 0 when the dice read 23456", function () {
      const dice = [
        { side: 2 },
        { side: 3 },
        { side: 4 },
        { side: 5 },
        { side: 6 },
      ];
      assert.equal(matches(dice, 1), 0);
    })
  });

  describe("Of A Kind", function () {

    it("should return 3 when the dice read 11123", function () {
      const dice = [
        { side: 1 },
        { side: 1 },
        { side: 1 },
        { side: 2 },
        { side: 3 },
      ];
      assert.equal(ofAKind(dice, 3), 3);
    });
    it("should return 0 when the dice read 12345", function () {
      const dice = [
        { side: 1 },
        { side: 2 },
        { side: 3 },
        { side: 4 },
        { side: 5 },
      ];
      assert.equal(ofAKind(dice, 3), 0);
    });

  });
  describe("Straight", function () {
    it("should return 30 when the dice read 12341", function () {
      const dice = [
        { side: 1 },
        { side: 2 },
        { side: 3 },
        { side: 4 },
        { side: 1 },
      ];
      assert.equal(straight(dice, "small"), 30);
    })
    it("should return 40 when the dice read 12345", function () {
      const dice = [
        { side: 1 },
        { side: 2 },
        { side: 3 },
        { side: 4 },
        { side: 5 },
      ];
      assert.equal(straight(dice, "large"), 40);
    })
    it("should return 0 when the dice read 12321", function () {
      const dice = [
        { side: 1 },
        { side: 2 },
        { side: 3 },
        { side: 2 },
        { side: 1 },
      ];
      assert.equal(straight(dice, "small"), 0);
    })
    it("should return 0 when the dice read 12321", function () {
      const dice = [
        { side: 1 },
        { side: 2 },
        { side: 3 },
        { side: 2 },
        { side: 1 },
      ];
      assert.equal(straight(dice, "large"), 0);
    })
  });
});

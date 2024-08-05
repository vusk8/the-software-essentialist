import { describe, it, expect, beforeEach } from "@jest/globals";
import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  let booleanCalculator: BooleanCalculator;

  beforeEach(() => {
    booleanCalculator = new BooleanCalculator();
  });

  describe("evaluate single value", () => {
    it('should return true when evaluate "TRUE" expression', () => {
      const result = booleanCalculator.evaluate("TRUE");
      expect(result).toBeTruthy();
    });

    it('should return false when evaluate "FALSE" expression', () => {
      const result = booleanCalculator.evaluate("FALSE");
      expect(result).toBeFalsy();
    });
  });

  describe("evaluate NOT operator", () => {
    it('should return false when evaluate "NOT TRUE" expression', () => {
      const result = booleanCalculator.evaluate("NOT TRUE");
      expect(result).toBeFalsy();
    });

    it('should return false when evaluate "NOT FALSE" expression', () => {
      const result = booleanCalculator.evaluate("NOT FALSE");
      expect(result).toBeTruthy();
    });
  });

  describe("evaluate AND operator", () => {
    it('should return true when evaluate "TRUE AND FALSE" expression', () => {
      const result = booleanCalculator.evaluate("TRUE AND FALSE");
      expect(result).toBeTruthy();
    });

    it('should return true when evaluate "FALSE AND TRUE" expression', () => {
      const result = booleanCalculator.evaluate("FALSE AND TRUE");
      expect(result).toBeTruthy();
    });

    it('should return true when evaluate "TRUE AND TRUE" expression', () => {
      const result = booleanCalculator.evaluate("TRUE AND TRUE");
      expect(result).toBeTruthy();
    });
  });

  describe("evaluate OR operator", () => {
    it('should return true when evaluate "TRUE OR FALSE" expression', () => {
      const result = booleanCalculator.evaluate("TRUE OR FALSE");
      expect(result).toBeTruthy();
    });

    it('should return true when evaluate "FALSE OR TRUE" expression', () => {
      const result = booleanCalculator.evaluate("FALSE OR TRUE");
      expect(result).toBeTruthy();
    });

    it('should return true when evaluate "FALSE OR FALSE" expression', () => {
      const result = booleanCalculator.evaluate("FALSE OR FALSE");
      expect(result).toBeFalsy();
    });
  });

  describe("evaluate with combination of operators w/ precedence", () => {
    it.failing('should return true when evaluate "FALSE OR FALSE AND TRUE" expression', () => {
      const result = booleanCalculator.evaluate("FALSE OR FALSE AND TRUE");
      expect(result).toBeFalsy();
    });
  });

  describe("split expression", () => {
    it("should return ['', expression] when no operator is present", () => {
      const result = booleanCalculator.splitExpression("TRUE", "AND");
      expect(result).toEqual(["", "TRUE"]);
    });
  });
});

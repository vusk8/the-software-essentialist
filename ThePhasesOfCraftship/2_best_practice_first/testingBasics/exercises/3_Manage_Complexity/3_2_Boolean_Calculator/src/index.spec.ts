import { describe, it, expect, beforeEach } from "@jest/globals";
import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  let calculator: BooleanCalculator;
  beforeEach(() => {
    calculator = new BooleanCalculator();
  });

  it("should return true when evaluate 'TRUE' expression", () => {
    const result = calculator.evaluate("TRUE");
    expect(result).toBe(true);
  });

  it("should return false when evaluate 'FALSE' expression", () => {
    const result = calculator.evaluate("FALSE");
    expect(result).toBe(false);
  });

  it("should return false when evaluate 'NOT TRUE' expression", () => {
    const result = calculator.evaluate("NOT TRUE");
    expect(result).toBe(false);
  });

  it("should return true when evaluate 'NOT FALSE' expression", () => {
    const result = calculator.evaluate("NOT FALSE");
    expect(result).toBe(true);
  });

  it("should return false when evaluate 'TRUE AND FALSE' expression", () => {
    const result = calculator.evaluate("TRUE AND FALSE");
    expect(result).toBe(false);
  });

  it("should return false when evaluate 'TRUE AND TRUE' expression", () => {
    const result = calculator.evaluate("TRUE AND TRUE");
    expect(result).toBe(true);
  });

  it("should return true when evaluate 'TRUE OR FALSE' expression", () => {
    const result = calculator.evaluate("TRUE OR FALSE");
    expect(result).toBe(true);
  });

  it("should return true when evaluate 'FALSE OR FALSE' expression", () => {
    const result = calculator.evaluate("FALSE OR FALSE");
    expect(result).toBe(false);
  });

  it("should evaluates AND before OR", () => {
    const result = calculator.evaluate("TRUE OR TRUE AND FALSE");
    expect(result).toBe(true);
  });

  it("should evaluates NOT before AND", () => {
    const result = calculator.evaluate("NOT TRUE AND FALSE");
    expect(result).toBe(false);
  });

  it("should return true when evaluates complex expression 'TRUE OR FALSE AND NOT FALSE'", () => {
    const result = calculator.evaluate("TRUE OR FALSE AND NOT FALSE");
    expect(result).toBe(true);
  });

  it("should return true when evaluates complex expression 'TRUE AND FALSE OR FALSE AND NOT TRUE'", () => {
    const result = calculator.evaluate("TRUE AND FALSE OR FALSE AND NOT TRUE");
    expect(result).toBe(false);
  });

  it("should evaluates single value within parentheses", () => {
    expect(calculator.evaluate("(TRUE)")).toBe(true);
    expect(calculator.evaluate("(FALSE)")).toBe(false);
  });
});

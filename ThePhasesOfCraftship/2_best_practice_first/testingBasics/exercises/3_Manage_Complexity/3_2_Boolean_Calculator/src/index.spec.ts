import { describe, it, expect } from "@jest/globals";
import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  it("should return true when evaluate 'TRUE' expression", () => {
    const calculator = new BooleanCalculator();

    const result = calculator.evaluate("TRUE");

    expect(result).toBe(true);
  });

  it("should return false when evaluate 'FALSE' expression", () => {
    const calculator = new BooleanCalculator();

    const result = calculator.evaluate("FALSE");

    expect(result).toBe(false);
  });
});

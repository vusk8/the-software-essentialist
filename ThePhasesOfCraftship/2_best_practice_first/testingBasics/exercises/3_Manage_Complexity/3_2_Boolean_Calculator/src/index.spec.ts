import { describe, it, expect } from "@jest/globals";
import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  it('should return true when evaluate "TRUE" expression', () => {
    const booleanCalculator = new BooleanCalculator();

    const result = booleanCalculator.evaluate("TRUE");

    expect(result).toBeTruthy();
  });
});

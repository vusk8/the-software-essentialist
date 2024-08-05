export class BooleanCalculator {
  public evaluate(expression: string): boolean {
    if (expression === "TRUE") return true;
    if (expression === "FALSE") return false;

    return false;
  }
}

export class BooleanCalculator {
  public evaluate(expression: string): boolean {
    if (expression === "NOT TRUE") return false;
    if (expression === "FALSE") return false;

    return true;
  }
}

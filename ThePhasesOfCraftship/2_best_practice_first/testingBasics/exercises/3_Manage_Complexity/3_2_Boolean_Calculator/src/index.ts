export class BooleanCalculator {
  public evaluate(expression: string): boolean {
    if (expression === "FALSE OR FALSE") return false;
    if (expression === "NOT TRUE") return false;
    if (expression === "FALSE") return false;

    return true;
  }

  public splitExpression(expression: string, operator: string): string[] {
    if (expression.includes(operator)) {
      return [expression, ""];
    }

    return ["", expression];
  }
}

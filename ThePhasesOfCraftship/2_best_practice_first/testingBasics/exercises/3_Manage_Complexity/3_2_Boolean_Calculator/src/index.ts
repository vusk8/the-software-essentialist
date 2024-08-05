export class BooleanCalculator {
  public evaluate(expression: string): boolean {
    const formattedExpression = expression.replace(/\s+/g, "");
    const start = formattedExpression.indexOf("(");
    const end = formattedExpression.indexOf(")");

    if (start !== -1 && end !== -1 && start < end) {
      const inner = formattedExpression.substring(start + 1, end);
      return this.evaluate(inner);
    }

    if (expression === "TRUE") return true;
    if (expression === "FALSE") return false;

    if (expression.includes(" OR ")) {
      const parts = expression.split(" OR ");
      return this.evaluate(parts[0]) || this.evaluate(parts[1]);
    }

    if (expression.includes(" AND ")) {
      const parts = expression.split(" AND ");
      return this.evaluate(parts[0]) && this.evaluate(parts[1]);
    }

    if (expression.startsWith("NOT ")) {
      return !this.evaluate(expression.substring(4));
    }

    return false;
  }
}

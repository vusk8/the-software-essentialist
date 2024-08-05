export class BooleanCalculator {
  public evaluate(expression: string): boolean {
    if (expression === "TRUE") return true;
    if (expression === "FALSE") return false;
    if (expression.startsWith("NOT ")) {
      return !this.evaluate(expression.substring(4));
    }

    if (expression.includes(" AND ")) {
      const parts = expression.split(" AND ");
      return this.evaluate(parts[0]) && this.evaluate(parts[1]);
    }

    if (expression.includes(" OR ")) {
      const parts = expression.split(" OR ");
      return this.evaluate(parts[0]) || this.evaluate(parts[1]);
    }

    return false;
  }
}

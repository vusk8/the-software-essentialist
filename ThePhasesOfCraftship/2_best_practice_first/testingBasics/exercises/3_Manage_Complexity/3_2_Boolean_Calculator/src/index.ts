export class BooleanCalculator {
  public evaluate(expression: string): boolean {
    let exp = expression.replace(/\s+/g, "");

    while (exp.indexOf("(") !== -1) {
      let depth = 0;
      let startIndex = -1;
      let endIndex = -1;

      for (let i = 0; i < exp.length; i++) {
        if (exp[i] === "(") {
          if (depth === 0) startIndex = i;
          depth++;
        } else if (exp[i] === ")") {
          depth--;
          if (depth === 0) {
            endIndex = i;
            break;
          }
        }
      }

      if (startIndex !== -1 && endIndex !== -1) {
        const innerExpression = exp.substring(startIndex + 1, endIndex);
        const result = this.evaluate(innerExpression);
        exp =
          exp.substring(0, startIndex) + (result ? "TRUE" : "FALSE") + exp.substring(endIndex + 1);
      }
    }

    return this.evaluateSimple(exp);
  }

  private evaluateSimple(expression: string): boolean {
    if (expression === "TRUE") return true;
    if (expression === "FALSE") return false;

    if (expression.includes("OR")) {
      const parts = expression.split("OR");
      return this.evaluate(parts[0]) || this.evaluate(parts[1]);
    }

    if (expression.includes("AND")) {
      const parts = expression.split("AND");
      return this.evaluate(parts[0]) && this.evaluate(parts[1]);
    }

    if (expression.startsWith("NOT")) {
      return !this.evaluate(expression.substring(3));
    }

    return false;
  }
}

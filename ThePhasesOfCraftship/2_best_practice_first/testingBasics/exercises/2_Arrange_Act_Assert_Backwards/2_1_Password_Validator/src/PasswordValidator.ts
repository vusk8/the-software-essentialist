type ValidateResult = {
  isValid: boolean;
  errors: string[];
};

class PasswordValidator {
  public validate(password: string): ValidateResult {
    const result: ValidateResult = {
      isValid: true,
      errors: [],
    };

    if (password.length < 5) {
      result.isValid = false;
      result.errors.push("Password length must be between 5 and 15 characters");
    }

    return result;
  }
}

export default PasswordValidator;
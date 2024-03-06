export function validateEmailAndPassword(email: string, password: string): boolean {
  // Simple validation for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  // Simple validation for password
  // At least 8 characters, at least one uppercase, one lowercase, one number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const isPasswordValid = passwordRegex.test(password);

  return isEmailValid && isPasswordValid;
}
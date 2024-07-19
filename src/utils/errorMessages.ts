const errorMessages: { [key: string]: string } = {
  INVALID_CREDENTIALS: "The email or password is incorrect. Please try again.",
  USER_NOT_FOUND: "The user does not exist.",
  ACCOUNT_LOCKED: "Your account is locked. Please contact support.",
  default: "An unexpected error occurred. Please try again later."
};

export default errorMessages;

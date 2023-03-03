 export const stringLength = (string) => {
  if (string.length === 0) {
    throw new Error("String must not be empty");
  }
  if (string.length > 10) {
    throw new Error("String must not be longer than 10 characters");
  }
  return string.length;
};



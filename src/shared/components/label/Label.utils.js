export const getCurrentFieldErrors = (errors, name) => {
  if (!errors || !errors.length || !name) {
    return null;
  }

  return errors.find(({ field }) => field === name)?.errors;
}
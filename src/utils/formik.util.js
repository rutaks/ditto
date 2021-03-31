/**
 * Provides respective error string if found
 * @param touched
 * @param errors
 * @param field
 */
export const getError = ({ touched, errors }, field) => {
  const check = touched[field] === true && errors[field] !== undefined;
  return check ? errors[field] : null;
};

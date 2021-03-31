/**
 * Returns error message available from axios response
 * @param {Object} errorObj
 * @returns
 */
export const getApiErrorMessage = (errorObj) => {
  return errorObj.response.data.message || errorObj.message;
};

import Axios from "axios";
import { getApiErrorMessage } from "../utils/axios.util";
import { BASE_URL } from "../utils/constants";

/**
 * Fetches all toDos from an API
 * @returns {Object}
 */
export const getAllToDos = async () => {
  const res = await Axios.get(`${BASE_URL}/books`);
  return res;
};

/**
 * Fetches one toDo from an API
 * @returns {Object}
 */
export const getToDo = async ({ queryKey }) => {
  try {
    const [, { id }] = queryKey;
    const res = await Axios.get(`${BASE_URL}/books/${id}`);
    return res;
  } catch (error) {
    throw Error(getApiErrorMessage(error));
  }
};

/**
 * Fetches all toDos from an API
 * @returns {Object}
 */
export const createToDo = async (data) => {
  try {
    const res = await Axios.post(`${BASE_URL}/books`, data);
    return res;
  } catch (error) {
    throw Error(getApiErrorMessage(error));
  }
};

/**
 * modifies todo by it's id
 * @returns {Object}
 */
export const modifyToDo = async ({ id, data }) => {
  try {
    const res = await Axios.put(`${BASE_URL}/books/${id}`, data);
    return res;
  } catch (error) {
    throw Error(getApiErrorMessage(error));
  }
};

/**
 * Fetches one toDo from an API
 * @returns {Object}
 */
export const removeToDo = async ({ id }) => {
  try {
    const res = await Axios.delete(`${BASE_URL}/books/${id}`);
    return res;
  } catch (error) {
    throw Error(getApiErrorMessage(error));
  }
};

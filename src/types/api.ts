import { type AxiosResponse } from 'axios';

/**
 * Assumes that the response from the API is an object with the following structure:
 * 
 * {
 *   data: T;
 *   status: string,
 * }
 * 
 * Change the type to the type of the data your backend returns.
 * 
 * @example:
 * If your backend directly returns the data without wrapping it in an object,
 * you can use the following snippet:
 * 
 * export type SuccessResponse<T> = T;
 * 
 */
export type SuccessResponse<T> = {
  data: T;
  status: string;
};

export type ServerResponse<T> = AxiosResponse<SuccessResponse<T>>;

export type GeneratorResponse<T> = Generator<
  Promise<ServerResponse<T>>,
  SuccessResponse<T>,
  ServerResponse<T>
>;

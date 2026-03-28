import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const errorHandler = (error: unknown) => {
  // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
  return Promise.reject(error);
};

apiClient.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

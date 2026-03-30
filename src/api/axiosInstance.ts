import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const username = import.meta.env.VITE_API_USERNAME;
const apiKey = import.meta.env.VITE_API_KEY;
const instanceName = import.meta.env.VITE_API_INSTANCE_NAME;

if (!baseUrl) {
  throw new Error('API base URL is not defined in environment variables');
}

if (!username) {
  throw new Error('API username is not defined in environment variables');
}

if (!apiKey) {
  throw new Error('API key is not defined in environment variables');
}

if (!instanceName) {
  throw new Error('API instance name is not defined in environment variables');
}

export const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Instance-Name': instanceName,
  },
  auth: {
    username: username,
    password: apiKey,
  },
});

const errorHandler = (error: unknown) => {
  // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
  return Promise.reject(error);
};

apiClient.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

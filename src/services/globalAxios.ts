import axios from 'axios';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const getCancelToken = () => axios.CancelToken;

const handleError = (error: any) => {
  const { status } = error;
  switch (status) {
    case StatusCode.InternalServerError: {
      break;
    }
    case StatusCode.Forbidden: {
      break;
    }
    case StatusCode.Unauthorized: {
      break;
    }
    case StatusCode.TooManyRequests: {
      break;
    }
  }
  return Promise.reject(error);
};

const globalAxios = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
  withCredentials: false,
});

globalAxios.interceptors.request.use(
  async config => {
    return Promise.resolve(config);
  },
  error => {
    return Promise.reject(error);
  },
);

globalAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    return handleError(response);
  },
);

export { getCancelToken, globalAxios };

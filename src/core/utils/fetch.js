import axios from 'axios';

export const API_ROOT = process.env.NODE_ENV === 'production' ? '' : process.env.REACT_APP_API_ROOT;

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

const customAxios = axios.create();

export const request = (url, method, options, context = 'openapi', prefix = 'v1') =>
  customAxios({
    url: `${API_ROOT}/${context ? `${context}/` : ''}${prefix}${url}`,
    method,
    ...options,
  });

export const getRequest = (url, params = {}, options = {}, context, prefix) =>
  request(url, METHODS.GET, { params, ...options }, context, prefix);

export const postRequest = (url, body = {}, params = {}, options = {}, context, prefix) =>
  request(url, METHODS.POST, { data: body, params, ...options }, context, prefix);

export const putRequest = (url, body, params = {}, options = {}, context, prefix) =>
  request(url, METHODS.PUT, { data: body, params, ...options }, context, prefix);

export const deleteRequest = (url, options = {}, context, prefix) =>
  request(url, METHODS.DELETE, options, context, prefix);

export const patchRequest = (url, body, options = {}, context, prefix) =>
  request(url, METHODS.PATCH, { data: body, ...options }, context, prefix);

export const configureRequests = store => {
  customAxios.interceptors.response.use(
    response => response,
    // eslint-disable-next-line
    error => {
      if (error.response && error.response.status === 401) {
        store.dispatch(logoutSuccess());
      } else {
        return Promise.reject(error);
      }
    },
  );
};

import axios from 'axios';
import AuthenticationStorage from '../authentication_storage';

// Returns configuration for the axios
function makeConfig() {
  const config = {};
  // Authorization
  if (AuthenticationStorage.isAuthenticated()) {
    config.headers = {
      Authorization: `Bearer ${AuthenticationStorage.getTokenText()}`,
      'Content-Type': 'multipart/form-data'
    };
  }
  return config;
}

/**
 * Provides access to data using the HTTP requests
 */
export default class DataService {
  // GET method
  static async get(path) {
    const response = await axios.get(path, makeConfig());
    return response.data;
  }

  // GET method with blob as return type
  static async getBlob(path) {
    const config = makeConfig();
    config.headers.responseType = 'blob';
    config.timeout = 10000;
    const response = await axios.get(path, config);
    return response.data;
  }

  // POST method
  static async post(path, data) {
    const response = await axios.post(path, data, makeConfig());
    return {
      data: response.data,
      location: response.headers.location
    };
  }

  // PUT method
  static async put(path, data) {
    const response = await axios.post(`${path}?_method=PUT`, data, makeConfig());
    return {
      data: response.data,
      location: response.headers.location
    };
  }

  // PATCH method
  static async patch(path, data) {
    return axios.post(`${path}?_method=PATCH`, data, makeConfig());
  }

  // DELETE method
  static async delete(path) {
    return axios.delete(path, makeConfig());
  }
}
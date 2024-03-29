import axios from 'axios';

import AuthenticationStorage from '../authentication_storage';

// Returns configuration for the axios
function makeConfig() {
  const config = {};
  // Authorization
  if (AuthenticationStorage.isAuthenticated()) {
    config.headers = {
      Authorization: `Bearer ${AuthenticationStorage.getTokenText()}`,
      'Content-Type': 'multipart/form-data',
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

  // POST method
  static async post(path, data) {
    const response = await axios.post(path, data, makeConfig());
    return { data: response.data, location: response.headers.location };
  }

  // PUT method
  static async put(path, data) {
    const response = await axios.post(
      `${path}?_method=PUT`,
      data,
      makeConfig(),
    );
    return { data: response.data, location: response.headers.location };
  }

  // PATCH method
  static async patch(path, data) {
    let url = '';
    if (path.includes('?')) url = `${path}&_method=PATCH`;
    else url = `${path}?_method=PATCH`;

    return axios.post(url, data, makeConfig());
  }

  // DELETE method
  static async delete(path) {
    return axios.delete(path, makeConfig());
  }
}

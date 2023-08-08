import DataService from '../data';
import LoggingService from '../logging';

export default class BasicService {
  // Path to API, should be initialized in derived classes
  static apiPath = null;

  // Create
  static async add(data) {
    let location = null;
    // Checking whether API path is set
    if (!BasicService.apiPath) {
      LoggingService.logError('API path is not set.');
    } else {
      const result = await DataService.post(BasicService.apiPath, data);
      location = result.location;
    }
    return location;
  }

  // Read
  static async get(id) {
    let result = null;
    // Checking whether API path is set
    if (!BasicService.apiPath) {
      LoggingService.logError('API path is not set.');
    } else {
      result = DataService.get(`${BasicService.apiPath}/${id}`);
    }
    return result;
  }

  //
  static async getAll() {
    let result = null;
    // Checking whether API path is set
    if (!BasicService.apiPath) {
      LoggingService.logError('API path is not set.');
    } else {
      result = DataService.get(BasicService.apiPath);
    }
    return result;
  }

  // Update
  static async update(id, data) {
    let result = null;
    // Checking whether API path is set
    if (!BasicService.apiPath) {
      LoggingService.logError('API path is not set.');
    } else {
      result = DataService.patch(`${BasicService.apiPath}/${id}`, data);
    }
    return result;
  }

  // Delete
  static async delete(id) {
    let result = null;
    // Checking whether API path is set
    if (!BasicService.apiPath) {
      LoggingService.logError('API path is not set.');
    } else {
      result = DataService.delete(`${BasicService.apiPath}/${id}`);
    }
    return result;
  }
}

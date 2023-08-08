import DataService from '../data';
import LoggingService from '../logging';
export default class BasicService {
  // Create
  static async add(data) {
    let location = null;
    // Checking whether API path is set
    if (!this.apiPath) {
      LoggingService.logError('API path is not set.');
    } else {
      const result = await DataService.post(this.apiPath, data);
      location = result.location;
    }
    return location;
  }

  // Read
  static async get(id) {
    let result = null;
    // Checking whether API path is set
    if (!this.apiPath) {
      LoggingService.logError('API path is not set.');
    } else {
      result = DataService.get(`${this.apiPath}/${id}`);
    }
    return result;
  }

  //
  static async getAll() {
    let result = null;
    // Checking whether API path is set
    if (!this.apiPath) {
      LoggingService.logError('API path is not set.');
    } else {
      result = DataService.get(this.apiPath);
    }
    return result;
  }

  // Update
  static async update(id, data) {
    let result = null;
    // Checking whether API path is set
    if (!this.apiPath) {
      LoggingService.logError('API path is not set.');
    } else {
      result = DataService.patch(`${this.apiPath}/${id}`, data);
    }
    return result;
  }

  // Delete
  static async delete(id) {
    let result = null;
    // Checking whether API path is set
    if (!this.apiPath) {
      LoggingService.logError('API path is not set.');
    } else {
      result = DataService.delete(`${this.apiPath}/${id}`);
    }
    return result;
  }
}
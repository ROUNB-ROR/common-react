import BasicService from './basic';
import DataService from '../data';

export default class UsersService extends BasicService {
  // Path to API
  static apiPath = '/api/users';

  // Returns current user
  static async getCurrent() {
    return DataService.get(`${this.apiPath}/current`);
  }

  // Set password
  static async setPassword(form) {
    return DataService.patch(`${this.apiPath}/current/password`, form);
  }
}

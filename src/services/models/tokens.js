import DataService from '../data';

//
const API_PATH = '/api/tokens';

//
export default class TokensService {
  // Creates new token for given credentials
  static async create(credentials) {
    const result = await DataService.post(API_PATH, credentials);
    return result.data;
  }

  // Removes token with given id
  static async remove(id) {
    return DataService.delete(`${API_PATH}/${id}`);
  }
}

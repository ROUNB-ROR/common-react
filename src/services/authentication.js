import { AuthenticationStorage } from '../authentication_storage';

import TokensService from './models/tokens';

//
export default class AuthenticationService {
  //
  static async login(credentials) {
    const token = await TokensService.create(credentials);
    AuthenticationStorage.store(token);
  }

  //
  static async logout() {
    await TokensService.remove(AuthenticationStorage.getId());
    AuthenticationStorage.remove();
  }
}

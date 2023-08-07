/**
 * Stores the authentication information
 */
export default class AuthenticationStorage {
  // Check if user is authenticated
  static isAuthenticated() {
    return AuthenticationStorage.token != null;
  }

  // Save token in memory
  static store(token) {
    AuthenticationStorage.token = token;
  }

  // Remove current token
  static remove() {
    AuthenticationStorage.token = null;
  }

  // Get token's id
  static getId() {
    return AuthenticationStorage.token.accessToken.id;
  }

  // Get token's plain text
  static getTokenText() {
    return AuthenticationStorage.token != null ? AuthenticationStorage.token.plainTextToken : null;
  }
}
AuthenticationStorage.token = null;
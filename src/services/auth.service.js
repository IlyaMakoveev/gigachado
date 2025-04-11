import { TokenService } from './token.service';

const API_URL = 'http://localhost:3001/api';

export const AuthService = {
  async login(fullname, password) {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullname, password })
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      if (data.token) {
        TokenService.saveToken(data.token);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  },

  logout() {
    TokenService.removeToken();
  }
};
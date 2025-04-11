import { defineStore } from 'pinia';
import { AuthService } from '@/services/auth.service';
import { TokenService } from '@/services/token.service';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loading: false,
    isAuthenticated: TokenService.hasToken()
  }),

  actions: {
    async login(fullname, password) {
      this.loading = true;
      try {
        const success = await AuthService.login(fullname, password);
        if (success) {
          this.isAuthenticated = true;
          return true;
        }
        return false;
      } finally {
        this.loading = false;
      }
    },

    logout() {
      AuthService.logout();
      this.isAuthenticated = false;
    }
  }
});
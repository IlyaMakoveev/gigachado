<template>
  <header class="topbar">
    <div class="container">
      <div class="logo-container">
        <svg class="logo" viewBox="0 0 77 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M76.8928 58.8928L64.8281 57.4132L63.8606 62.6896L76.8928 58.8928Z" fill="#00A32C"/>
          <path d="M76.8928 58.8928L70.6328 20.7638L64.8281 57.4132L76.8928 58.8928Z" fill="#00A32C"/>
          <path d="M62.4379 63.1041L63.8606 62.6896M76.8928 58.8928L70.6328 20.7638L64.8281 57.4132M76.8928 58.8928L64.8281 57.4132M76.8928 58.8928L63.8606 62.6896M64.8281 57.4132L63.8606 62.6896" stroke="white" stroke-width="1.70727" stroke-linejoin="round"/>
        </svg>
        <h1 class="logo-text">Холидайзер</h1>
      </div>
      <nav class="nav">
        <button class="nav-btn" @click="handleLogout">
          Выйти
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from '@/store/auth';

export default {
  name: 'TopBar',
  setup() {
    const authStore = useAuthStore();

    const handleLogout = () => {
      authStore.logout();
    };

    return { handleLogout };
  }
};
</script>

<style scoped>
.topbar {
  height: 79px;
  background: white;
  border-bottom: 1px solid #E5E5E5;
}

.container {
  max-width: 1920px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  height: 40px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-primary);
  margin: 0;
}

.nav-btn {
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  min-width: 104px;
}

.nav-btn:hover {
  background: var(--primary-dark);
}
</style>

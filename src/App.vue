<template>
  <div class="app">
    <template v-if="!isAuthenticated">
      <landing-page :show-landing="showLanding" @start="showLanding = false" />
    </template>
    
    <template v-else>
      <top-bar />
      <main class="main-content">
        <h2>Добро пожаловать в систему!</h2>
        <!-- Здесь будет основной контент -->
      </main>
    </template>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/store/auth';
import LandingPage from './LandingPage.vue';
import TopBar from './TopBar.vue';

export default {
  name: 'App',
  components: {
    LandingPage,
    TopBar
  },
  setup() {
    const authStore = useAuthStore();
    const showLanding = ref(true);
    
    return {
      showLanding,
      isAuthenticated: computed(() => authStore.isAuthenticated)
    };
  }
};
</script>

<style>
.app {
  min-height: 100vh;
  background: white;
}

.main-content {
  max-width: 1920px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  color: var(--text-primary);
  font-size: 1.75rem;
  margin-bottom: 2rem;
}
</style>

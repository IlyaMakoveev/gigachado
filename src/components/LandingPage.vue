<template>
  <div class="landing">
    <div class="top-bar">
      <div class="logo-container">
        <svg class="logo" viewBox="0 0 77 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M76.8928 58.8928L64.8281 57.4132L63.8606 62.6896L76.8928 58.8928Z" fill="#00A32C"/>
          <path d="M76.8928 58.8928L70.6328 20.7638L64.8281 57.4132L76.8928 58.8928Z" fill="#00A32C"/>
          <path d="M62.4379 63.1041L63.8606 62.6896M76.8928 58.8928L70.6328 20.7638L64.8281 57.4132M76.8928 58.8928L64.8281 57.4132M76.8928 58.8928L63.8606 62.6896M64.8281 57.4132L63.8606 62.6896" stroke="white" stroke-width="1.70727" stroke-linejoin="round"/>
        </svg>
        <span class="logo-text">Холидайзер</span>
      </div>
    </div>
    <div class="content">
      <img src="/landing.png" alt="Welcome" class="hero-image">
      <div class="auth-container">
        <login-form v-if="!showLanding" @login-success="$emit('start')" />
        <div v-else class="welcome-container">
          <h1>Добро пожаловать в систему!</h1>
          <p>Ваш умный помощник в планировании отпуска</p>
          <button class="start-btn" @click="$emit('start')">
            Начать работу
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
  name: 'LandingPage',
  components: {
    LoginForm
  },
  props: {
    showLanding: {
      type: Boolean,
      default: true
    }
  },
  emits: ['start']
}
</script>

<style scoped>
.landing {
  min-height: 100vh;
  background: white;
}

.top-bar {
  height: 79px;
  background: white;
  border-bottom: 1px solid #E5E5E5;
  display: flex;
  align-items: center;
  padding: 0 2rem;
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
}

.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;
}

.hero-image {
  max-width: 60%;
  height: auto;
}

.auth-container {
  width: 100%;
  max-width: 470px;
  margin-top: 2rem;
}

.welcome-container {
  background: white;
  border: 1px solid #777780;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: var(--text-primary);
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

p {
  color: #777780;
  margin-bottom: 2rem;
}

.start-btn {
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  max-width: 200px;
}

.start-btn:hover {
  background: var(--primary-dark);
}

@media (max-width: 1024px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .hero-image {
    max-width: 100%;
  }

  .auth-container {
    margin-top: 0;
  }
}
</style>

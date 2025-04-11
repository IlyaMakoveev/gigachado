<template>
  <div class="login-container">
    <h2>Добро пожаловать в систему!</h2>
    <p class="subtitle">Ваш умный помощник в планировании отпуска</p>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="field">
        <label for="fullname">Ваши ФИО</label>
        <input
          type="text"
          id="fullname"
          v-model="fullname"
          :class="{ error: error && !fullname }"
          placeholder="Введите имя"
          :disabled="isLoading"
          @focus="error = ''"
        />
      </div>

      <div class="field">
        <label for="password">Пароль</label>
        <div class="password-field">
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            :class="{ error: error && !password }"
            placeholder="Введите пароль"
            :disabled="isLoading"
            @focus="error = ''"
          />
          <button 
            type="button" 
            class="show-password"
            @click="showPassword = !showPassword"
          >
            <i :class="showPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"></i>
          </button>
        </div>
      </div>

      <p v-if="error" class="error-text">
        <i class="mdi mdi-alert-circle"></i>
        {{ error }}
      </p>

      <button type="submit" class="submit" :disabled="isLoading">
        {{ isLoading ? 'ВХОД...' : 'ВОЙТИ' }}
      </button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { ref, computed } from 'vue';

export default {
  name: "LoginForm",
  emits: ['login-success'],
  setup(props, { emit }) {
    const authStore = useAuthStore();
    const fullname = ref('');
    const password = ref('');
    const error = ref('');
    const showPassword = ref(false);

    const handleSubmit = async () => {
      if (!fullname.value || !password.value) {
        error.value = "Пожалуйста, заполните все поля";
        return;
      }

      try {
        const success = await authStore.login(fullname.value, password.value);
        if (success) emit('login-success');
        else error.value = "Неверные данные для входа";
      } catch {
        error.value = "Произошла ошибка при входе";
      }
    };

    return {
      fullname,
      password,
      error,
      showPassword,
      handleSubmit,
      isLoading: computed(() => authStore.loading)
    };
  }
};
</script>

<style scoped>
.login-container {
  background: white;
  border: 1px solid #777780;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
}

h2 {
  color: var(--text-primary);
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
}

.subtitle {
  color: #777780;
  text-align: center;
  margin-bottom: 2rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field label {
  color: var(--text-primary);
  font-weight: 500;
}

.field input {
  padding: 0.75rem;
  border: 1px solid #777780;
  border-radius: 8px;
  width: 100%;
  font-size: 1rem;
}

.field input:focus {
  outline: none;
  border-color: var(--primary);
}

.password-field {
  position: relative;
}

.show-password {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #777780;
  cursor: pointer;
}

.error {
  border-color: var(--danger) !important;
}

.error-text {
  color: var(--danger);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  margin: 0;
}

.submit {
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  max-width: 104px;
  margin: 0 auto;
}

.submit:hover:not(:disabled) {
  background: var(--primary-dark);
}

.submit:disabled {
  background: var(--disabled);
  cursor: not-allowed;
}
</style>

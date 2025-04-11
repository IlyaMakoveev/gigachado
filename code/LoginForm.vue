<template>
    <section class="login-container" aria-labelledby="welcome-heading">
      <h2 id="welcome-heading" class="welcome-heading">Добро пожаловать!</h2>
      <div class="form-wrapper">
        <form class="login-form" @submit.prevent="handleSubmit">
          <div class="form-field">
            <label for="fullname" class="form-label">Ваши ФИО</label>
            <input
              type="text"
              id="fullname"
              class="form-input"
              placeholder="Введите имя"
              v-model="fullname"
              aria-required="true"
            />
          </div>
          <div class="form-field">
            <label for="password" class="form-label">Пароль</label>
            <input
              type="password"
              id="password"
              class="form-input"
              placeholder="Введите пароль"
              v-model="password"
              aria-required="true"
            />
          </div>
        </form>
        <button
          type="submit"
          class="login-button"
          @click="handleSubmit"
          aria-label="Войти в систему"
        >
          ВОЙТИ
        </button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "LoginForm",
    data() {
      return {
        fullname: "",
        password: "",
      };
    },
    methods: {
      handleSubmit() {
        // Handle login submission
        console.log("Login submitted", this.fullname, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 1.322px solid #000;
    background-color: #fff;
    display: flex;
    margin-bottom: -65px;
    min-height: 355px;
    width: 470px;
    max-width: 100%;
    padding: 25px 50px;
    flex-direction: column;
    overflow: hidden;
  }
  
  .welcome-heading {
    color: #000;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.75px;
    margin: 0;
  }
  
  .form-wrapper {
    display: flex;
    margin-top: 18px;
    width: 100%;
    max-width: 370px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
  
  .login-form {
    width: 100%;
    font-size: 20px;
  }
  
  .form-field {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 21px;
  }
  
  .form-field:last-of-type {
    margin-bottom: 0;
  }
  
  .form-label {
    align-self: flex-start;
    color: #000;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 11px;
  }
  
  .form-input {
    align-self: stretch;
    width: 100%;
    border-radius: 7.935px;
    border: 1.322px solid #777780;
    background-color: #fff;
    min-height: 53px;
    padding: 13px 16px;
    overflow: hidden;
    color: #777780;
    font-weight: 400;
    line-height: 1;
    font-size: 20px;
    font-family: inherit;
  }
  
  .login-button {
    border-radius: 12.1px;
    border: 1.1px solid #00a32c;
    background-color: #00a32c;
    margin-top: 13px;
    width: 105px;
    max-width: 100%;
    padding: 9px;
    gap: 9px;
    font-size: 15px;
    color: #fff;
    font-weight: 700;
    white-space: nowrap;
    line-height: 1;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #008a24;
  }
  
  .login-button:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
  
  @media (max-width: 991px) {
    .login-container {
      margin-bottom: 10px;
      padding: 25px 20px;
    }
  
    .form-label,
    .login-button {
      white-space: initial;
    }
  }
  </style>
  
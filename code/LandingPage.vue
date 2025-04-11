<template>
  <main class="landing-page">
    <TopBar />
    <section class="hero-section">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6902d81df05e35e08bbe73ae14d0df9a44176fe8?placeholderIfAbsent=true&apiKey=32903d1cf4f647e5a10910282f251c41" alt="Background image" class="hero-background" />
      <LoginForm />
    </section>
  </main>
</template>

<script>
import TopBar from "./TopBar.vue";
import LoginForm from "./LoginForm.vue";

export default {
  name: "LandingPage",
  components: {
    TopBar,
    LoginForm,
  },
};
</script>

<style scoped>
.landing-page {
  background-color: #fff;
  padding-bottom: 62px;
  font-family:
    Ubuntu,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
}

.hero-section {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 1001px;
  width: 100%;
  padding: 323px 80px;
  align-items: flex-end;
  justify-content: center;
}

.hero-background {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 991px) {
  .hero-section {
    max-width: 100%;
    padding: 100px 20px;
  }
}
</style>

<template>
    <header class="top-bar">
      <div class="logo-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a0971f58da5b848840a23666538ff35e2719002?placeholderIfAbsent=true&apiKey=32903d1cf4f647e5a10910282f251c41" alt="Holidayzer logo" class="logo-image" />
        <h1 class="logo-text">ХОЛИДАЙЗЕР</h1>
      </div>
      <nav>
        <p class="username">my name</p>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "TopBar",
  };
  </script>
  
  <style scoped>
  .top-bar {
    background-color: #fff;
    display: flex;
    width: 100%;
    padding: 15px 23px;
    align-items: stretch;
    gap: 20px;
    overflow: hidden;
    color: #00a32c;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .logo-container {
    display: flex;
    align-items: stretch;
    gap: 20px;
    font-size: 28px;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
  }
  
  .logo-image {
    aspect-ratio: 1.16;
    object-fit: contain;
    object-position: center;
    width: 58px;
    flex-shrink: 0;
  }
  
  .logo-text {
    margin: auto 0;
    flex-basis: auto;
    font-size: 28px;
    font-weight: 400;
  }
  
  .username {
    font-size: 24px;
    font-weight: 700;
    text-decoration: underline;
    margin: auto 0;
  }
  
  @media (max-width: 991px) {
    .top-bar {
      max-width: 100%;
      padding: 15px 20px;
    }
  
    .logo-container {
      white-space: initial;
    }
  }
  </style>
  
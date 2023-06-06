<template>
  <div>
    <header>Nuxt3アプリケーション</header>
    <div class="container">
      <slot />
    </div>
    <footer>© 2023 highsai-eng</footer>
  </div>
</template>

<style scoped>
header {
  border-bottom-style: solid;
  padding: 1rem;
}
footer {
  margin-top: 2rem;
  background-color: #8080EE;
  padding: 1rem;
}
.container {
  margin: 2rem;
}
</style>

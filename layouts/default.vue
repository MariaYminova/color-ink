<template>
  <TheHeader />
  <div class="container">
    <slot></slot>
  </div>
  <TheFooter />
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

body {
  margin: 0;
  font-family: "Comfortaa";
}
</style>

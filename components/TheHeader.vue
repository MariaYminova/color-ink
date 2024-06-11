<template>
  <header class="header">
    <div class="container">
      <img class="header__logo" src="../icon/icon-logo.svg" alt="" />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 10px 0;
  width: 100%;
  box-shadow: 0px -3px 8px 0px #6c62e1;

  @media (max-width: 720px) {
      padding: 0;
    }

  &__logo {
    height: 65px;
    width: 65px;

    @media (max-width: 720px) {
      height: 55px;
      width: 55px;
    }
  }
}
</style>

<template>
  <footer class="the-footer">
    <div class="the-footer__line" :style="{ backgroundColor: '#F1B901' }"></div>
    <div class="the-footer__line" :style="{ backgroundColor: '#FFD755' }"></div>
    <div class="the-footer__line" :style="{ backgroundColor: '#FFEFBC' }"></div>
    <div class="the-footer__line" :style="{ backgroundColor: '#B9BBDE' }"></div>
    <div class="the-footer__line" :style="{ backgroundColor: '#9B8FAC' }"></div>
  </footer>
</template>

<style lang="scss">
.the-footer {
  margin-top: 100px;

  &__line {
    height: 10px;
    width: 100%;
    margin-top: 5px;
  }
}
</style>

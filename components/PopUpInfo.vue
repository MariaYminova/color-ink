<template>
  <div class="pop-up-info">
    <slot class="pop-up-info__description"></slot>
  </div>
</template>

<style lang="scss">
.pop-up-info {
  width: 150px;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  background-color: #fff;
  border: 1px solid #77a6fe;
  top: 30px;
  left: -75px;

  @media (max-width: 720px) {
    left: -150px;
  }

  &__description {
    max-width: 200px;
    color: brown;
  }
}
</style>

<template>
  <div class="pop-up-info" v-click-outside="close">
    <div @click="emit('update:modelValue', !modelValue)">
      <slot name="icon">
        <span class="pop-up-info__trigger"></span>
      </slot>
    </div>
    <div class="pop-up-info__content" v-if="modelValue" >
      <slot class="pop-up-info__description"></slot>
    </div>
  </div>
</template>

<script setup>
import clickOutside from "@/directives/clickOutside";

const vClickOutside = clickOutside;

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

function close() {
  emit('update:modelValue', false)
}
</script>

<style lang="scss">
.pop-up-info {
  position: relative;

  &__content {
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

  &__trigger {
    display: block;
    position: relative;
    background-image: url("@/icon/icon-info.svg");
    height: 25px;
    width: 23px;
  }
}
</style>

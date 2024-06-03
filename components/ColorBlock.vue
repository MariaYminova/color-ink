<template>
  <div
    :class="['color-block', { active: isActive }]"
    @click="selectColor(color)"
  >
    <IconColor class="color-block__icon" :style="{ fill: color.fill }" />
    <div class="color-block__name">{{ color.name }}</div>
    <div class="color-block__number">{{ color.id }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: Object,
    required: true,
  },
});

const hairStore = useHairStore();

const isActive = computed(() => {
  if (props.color.type === "lighteningTone") {
    return hairStore.choiceLighteningTone.id === props.color.id;
  } else if (props.color.type === "baseColor") {
    return hairStore.choiceBaseColor.id === props.color.id;
  } else if (props.color.type === "pigmentColor") {
    return hairStore.choicePigmentColor.id === props.color.id;
  }
  return false;
});

const selectColor = (color) => {
  if (color.type === "lighteningTone") {
    hairStore.choiceLighteningTone = color;
  } else if (color.type === "baseColor") {
    hairStore.choiceBaseColor = color;
  } else if (color.type === "pigmentColor") {
    hairStore.choicePigmentColor = color;
  }
  hairStore.mixColors();
};
</script>

<style lang="scss">
.color-block {
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 1px #e2e2e2;
  padding: 10px 15px;
  gap: 15px;
  cursor: pointer;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 0px 5px 1px #4c41c9;
  }

  &.active {
    box-shadow: 0px 0px 5px 1px #4c41c9;
  }

  &__name {
    font-size: 14px;
    font-weight: 700;
    width: 120px;
  }

  &__number {
    font-size: 14px;
    width: 16px;
  }

  &__icon {
    fill: #c0bcf0;
    height: 40px;
    width: 40px;
    box-shadow: 0px 0px 4px 1px #e2e2e2;
    border-radius: 50%;
  }
}
</style>

<template>
  <div class="calculator-wrap row">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 ">
      <div class="calculator-wrap__wrap">
        <div class="calculator-wrap__name">Этап 1</div>
        <div class="calculator-wrap__description">
          Ваш цвет волос
          <PopUpInfo v-model="visibilityLighteningTone">
              
              Ваш цвет волос - степень осветления ваших волос
            </PopUpInfo>
        </div>

        <div class="calculator-wrap__block">
          <ColorBlock
            v-for="lighteningTone in hairStore.lighteningTones"
            :key="lighteningTone.id"
            :color="lighteningTone"
          />
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="calculator-wrap__wrap">
        <div class="calculator-wrap__name">Этап 2</div>
        <div class="calculator-wrap__description">
          Ваш цвет волос
          <PopUpInfo v-model="visibilityBaseColor"
            >Основное направление красителя - отттенок натурального цвета,
            которого в стандартной тубе 70%.</PopUpInfo
          >
          
        </div>

        <div class="calculator-wrap__block">
          <ColorBlock
            v-for="baseColor in hairStore.baseColors"
            :color="baseColor"
            :key="baseColor.id"
          />
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="calculator-wrap__wrap">
        <div class="calculator-wrap__name">Этап 3</div>
        <div class="calculator-wrap__description">
          Дополнительный краситель
          <PopUpInfo v-model="visibilityPigmentColor"
            >Дополнительный краситель - добавочный пигмент, корректирующий цвет,
            в стандартной тубе 30%.</PopUpInfo
          >
        </div>

        <div class="calculator-wrap__block">
          <ColorBlock
            v-for="pigmentColor in hairStore.pigmentColors"
            :color="pigmentColor"
            :key="pigmentColor.id"
          />
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="calculator-wrap__wrap">
        <div class="calculator-wrap__name">Этап 4</div>
        <div class="calculator-wrap__description">Результат</div>
        <div class="calculator-wrap__block">
          <ColorBlock :color="hairStore.finalColor" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const hairStore = useHairStore();
const visibilityLighteningTone = ref(false);
const visibilityBaseColor = ref(false);
const visibilityPigmentColor = ref(false);

</script>

<style lang="scss">
.calculator-wrap {
  margin-top: 40px;

  &__wrap {
    box-shadow: 0px 0px 5px 1px #c0bcf0;
    border-radius: 10px;
    padding: 20px;
  
    
    @media (max-width: 920px) {
      height: 97%;
    }

    @media (max-width: 520px) {
      height: auto;
      margin-bottom: 20px;
    }

   
  }

  &__block {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 100%;
  }

  &__name {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
    width: 130px;
  }

  &__description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 30px;

    height: 32px;
  }

  &__icon-pop-up {
    position: relative;
    background-image: url("../icon/icon-info.svg");
    height: 25px;
    width: 23px;
  }
}
</style>

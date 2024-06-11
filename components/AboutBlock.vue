<template>
  <div class="about-block">
    <div>
      <div class="about-block__heading">Калькулятор цвета</div>
      <p class="about-block__description">
        Калькулятор красок для волос – это удобный инструмент, который помогает
        рассчитать желаемый цвет волос, учитывая ваш тон волос и краситель,
        который вы хотите использовать. Этот калькулятор особенно полезен для
        тех, кто предпочитает окрашивать волосы дома. Выбирайте цвета следуя
        этапам и в итоге вы увидете конечный результат.
      </p>
    </div>
    <img class="about-block__img" src="../icon/icon-geometry.png" alt="" />
  </div>
</template>

<style lang="scss">
.about-block {
  display: flex;
  position: relative;
  padding: 70px 40px;
  margin-top: 90px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px #c0bcf0;

  @media (max-width: 960px) {
    padding: 40px 30px;
    margin-top: 40px;
  }

  &__heading {
    font-weight: 700;
    font-size: 40px;

    @media (max-width: 960px) {
      max-width: 350px;
    }

    @media (max-width: 720px) {
      max-width: 100%;
      font-size: 32px;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 16px;
    max-width: 650px;
    line-height: 21px;

    @media (max-width: 960px) {
      max-width: 400px;
    }

    @media (max-width: 720px) {
      max-width: 100%;
    }
  }

  &__img {
    position: absolute;
    top: 0px;
    right: 40px;
    height: 100%;

    @media (max-width: 960px) {
      right: 20px;
    }

    @media (max-width: 760px) {
      display: none;
    }
  }
}
</style>

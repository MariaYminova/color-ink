import { defineStore } from "pinia";

export const useHairStore = defineStore("hairStore", {
  state: () => ({
    lighteningTones: [ 
      {
        type: "lighteningTone",
        active: false,
        id: "1",
        name: "Черный",
        fill: "#252523",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "2",
        name: "Каштан",
        fill: "#39362E",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "3",
        name: "Очень темный каштан",
        fill: "#473D34",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "4",
        name: "Темный каштан",
        fill: "#574236",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "5",
        name: "Каштан",
        fill: "#674C31",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "6",
        name: "Шатен",
        fill: "#725628",
      },

      {
        type: "lighteningTone",
        active: false,
        id: "7",
        name: "Светлый русый шатен",
        fill: "#917641",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "8",
        name: "Темный блонд",
        fill: "#BDA26B",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "9",
        name: "Блонд",
        fill: "#E1C696",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "10",
        name: "Светлый блонд",
        fill: "#FBEAC0",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "11",
        name: "Выцветший рыжий",
        fill: "#F0A77D",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "12",
        name: "Выцветший розовый",
        fill: "#E5ABA8",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "13",
        name: "Выцветший сине-зеленый",
        fill: "#B6D7CE",
      },
      {
        type: "lighteningTone",
        active: false,
        id: "14",
        name: "Выцветший синий",
        fill: "#91C9D5",
      },
    ],

    baseColors: [
      {
        type: "baseColor",
        id: "1",
        name: "Черный",
        fill: "#252523",
      },
      {
        type: "baseColor",

        id: "2",
        name: "Каштан",
        fill: "#39362E",
      },
      {
        type: "baseColor",
        id: "3",
        name: "Очень темный каштан",
        fill: "#473D34",
      },
      {
        type: "baseColor",
        id: "4",
        name: "Темный каштан",
        fill: "#574236",
      },
      {
        type: "baseColor",
        id: "5",
        name: "Каштан",
        fill: "#674C31",
      },
      {
        type: "baseColor",
        id: "6",
        name: "Шатен",
        fill: "#725628",
      },
      {
        type: "baseColor",
        id: "7",
        name: "Светлый русый шатен",
        fill: "#917641",
      },
      {
        type: "baseColor",
        id: "8",
        name: "Темный блонд",
        fill: "#BDA26B",
      },
      {
        type: "baseColor",
        id: "9",
        name: "Блонд",
        fill: "#E1C696",
      },
      {
        type: "baseColor",
        id: "10",
        name: "Светлый блонд",
        fill: "#FBEAC0",
      },
    ],

    pigmentColors: [
      {
        type: "pigmentColor",
        id: ".0",
        name: "Нейтаральный тон",
        fill: "#F4F4D4",
      },
      {
        type: "pigmentColor",
        id: ".1",
        name: "Пепельный",
        fill: "#6C615F",
      },
      {
        type: "pigmentColor",
        id: ".2",
        name: "Матовый",
        fill: "#0E6844",
      },
      {
        type: "pigmentColor",
        id: ".3",
        name: "Золотой",
        fill: "#FEDE02",
      },
      {
        type: "pigmentColor",
        id: ".4",
        name: "Красный",
        fill: "#C61414",
      },
      {
        type: "pigmentColor",
        id: ".5",
        name: "Mахагон",
        fill: "#B92557",
      },
      {
        type: "pigmentColor",
        id: ".6",
        name: "Фиолетовый",
        fill: "#15304E",
      },
      {
        type: "pigmentColor",
        id: ".7",
        name: "Гавана",
        fill: "#3B0311",
      },
    ],

    choiceLighteningTone: {
      id: "",
      fill: "",
    },

    choiceBaseColor: {
      id: "",
      fill: "",
    },

    choicePigmentColor: {
      id: "",
      fill: "",
    },

    finalColor: {
      id: "",
      fill: "",
      name: "Номер краски",
    },
  }),

  actions: {
    hexToRgb(hex) {
      hex = hex.replace(/^#/, "");

      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;

      return { r, g, b };
    },

    mixColors() {
      this.finalColor.id = this.choiceBaseColor.id + this.choicePigmentColor.id;
      const rgbLighteningTone = this.hexToRgb(this.choiceLighteningTone.fill);
      const rgbBaseColor = this.hexToRgb(this.choiceBaseColor.fill);
      const rgbPigmentColor = this.hexToRgb(this.choicePigmentColor.fill);

      const finalColor = {
        r: Math.round(
          rgbLighteningTone.r * 0.5 +
            rgbBaseColor.r * 0.3 +
            rgbPigmentColor.r * 0.2
        ),
        g: Math.round(
          rgbLighteningTone.g * 0.5 +
            rgbBaseColor.g * 0.3 +
            rgbPigmentColor.g * 0.2
        ),
        b: Math.round(
          rgbLighteningTone.b * 0.5 +
            rgbBaseColor.b * 0.3 +
            rgbPigmentColor.b * 0.2
        ),
      };

      this.finalColor.fill = this.rgbToHex(
        finalColor.r,
        finalColor.g,
        finalColor.b
      );
    },

    componentToHex(c) {
      const hex = Math.min(Math.max(0, c), 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    },

    rgbToHex(r, g, b) {
      r = Math.min(Math.max(0, r), 255);
      g = Math.min(Math.max(0, g), 255);
      b = Math.min(Math.max(0, b), 255);

      return (
        "#" +
        this.componentToHex(r) +
        this.componentToHex(g) +
        this.componentToHex(b)
      );
    },
  },
});

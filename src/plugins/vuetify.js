import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import en from "vuetify/lib/locale/en";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#29B6F6",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  lang: {
    locales: { en },
    current: "en",
  },
});

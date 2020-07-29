import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import { preset } from 'vue-cli-plugin-vuetify-preset-crane/preset';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  preset,
  theme: {
    themes: {
      light: {
        /*
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        */
      },
    },
  },
});

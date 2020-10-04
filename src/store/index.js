import Vue from 'vue';
import Vuex from 'vuex';

import plugins from './plugins';
import modules from '../modules';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },

  mutations: {
  },

  actions: {
  },

  modules,

  plugins,
});

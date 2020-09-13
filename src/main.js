import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import plugins from './plugins';

Vue.config.productionTip = false;

new Vue({
  vuetify: plugins.Vuetify,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import './index.css';
import router from './routes';
import "nprogress/nprogress.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

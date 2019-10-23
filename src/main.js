import Vue from 'vue';
import openSocket from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';

export const SocketInstance = openSocket('http://localhost:8080', {
  query: {
    token: window.localStorage.getItem('auth'),
  },
});

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketInstance,
  }),
);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

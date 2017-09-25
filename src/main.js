// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/app'
import App from './App'
import router from './router/index'
import VeeValidate from 'vee-validate'


require('semantic-ui-css/semantic.css')

Vue.config.productionTip = false
Vue.use(VeeValidate)

/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    },
    data: {
        idxx: 'main.js'
    }
})

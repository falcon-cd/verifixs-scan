import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import storeData from './store/store.js'
import axios from 'axios'
import store from "./store/store";
Vue.config.productionTip = false;

Vue.filter('sortlength', function(text, length, suffix) {
    var sorted = (text.length > length) ? text.substring(0, length) + suffix : text
    return sorted;
});
Vue.use(Vuex);

//axios instance
var instance = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
Vue.prototype.$axios = instance;

Vue.component('XLoading', require('@/components/utilities/loading').default);

//support vueSweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

//support Qrcode
import VueQrcodeReader from "vue-qrcode-reader";
Vue.use(VueQrcodeReader);

new Vue({
    render: h => h(App),
    store:store
}).$mount('#app');

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import storeData from './store/store.js'
import axios from 'axios'
import store from "./store/store";
Vue.config.productionTip = false;

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

/*create global reusable scan result modal view */
Vue.component('ScanResultModal', require('@/components/utilities/scan_result_modal').default);


import $ from 'jquery';
var modal = function (key) {
    if(key==='show'){
       $(".trigger").click(); 
    }
    if(key==='hide'){
        $(".close").click();
    }
    
}

//**Create global prototype callback of scan result modal **//
Vue.prototype.$scanResultModal = modal;
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

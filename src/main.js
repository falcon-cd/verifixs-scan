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
Vue.component('scanResultModal', require('@/components/utilities/scan_result_modal').default);


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


//**create prototype which allow to convert b64 to blob**//
const b64toBlob = function b64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
  
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);
  
      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }
Vue.prototype.$base64toBlob = b64toBlob;


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

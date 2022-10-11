<template>
  <div>
    <x-loading v-if="isLoading" />
    <div class="topbar">
      <div class="container-fluid">
        <!-- /.topbar__social -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.topbar -->
    <nav class="main-menu">
      <div class="container-fluid">
        <div class="main-menu__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="main-menu__logo__shape-1"
            viewBox="0 0 317 120"
          >
            <path d="M259.856,120H0V0H274l43,37.481Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="main-menu__logo__shape-2"
            viewBox="0 0 317 120"
          >
            <path d="M259.856,120H0V0H274l43,37.481Z" />
          </svg>

          <a href="#/home" class="ml-4">
            <img src="assets/images/VERIFIX_LOGO_COLOUR.png" style="height: 40px;" alt="Finlon" />
          </a>
        </div>
        <!-- /.main-menu__logo -->
        <div class="main-menu__nav">
          <ul class="main-menu__list"></ul>
        </div>

        <!-- /.main-menu__nav -->
        <div class="main-menu__right">
          <!--<router-link
            tag="a"
            :to="{ name: 'new-loan' }"
            class="thm-btn main-menu__btn animated-bounce-h"
            @click.prevent="viewConditions"
          >
            <i class="lnr lnr-plus-circle font-weight-bold"></i> Nouvelle
            diligence</router-link>!-->
          
          
        </div>
    
        <!-- /.main-menu__nav -->
      </div>
      <!-- /.main-menu__right -->

      <!-- /.container-fluid -->
    </nav>
    <!-- /.main-menu -->

    <div class="stricky-header stricked-menu main-menu">
      <div class="sticky-header__content"></div>
      <!-- /.sticky-header__content -->
    </div>

    <div v-if="certificat===null || certificat.length<1" class="container" >
      <div  class="card">
        <div class="text">
          <h2>QR scan</h2>
        </div>
        <div class="qr-scanner" v-if="camera === 'auto'">
          <qrcode-stream class="" @decode="onDecode" @init="onInit" :camera="camera"
            ><div class="box">
              <div class="line"></div>
              <div class="angle"></div></div
          ></qrcode-stream>
        </div>
        <div v-else class="qr-zone">
          <img src="assets/images/qr-scan-img.jpg" @click.prevent="camera = 'auto'" />
        </div>


        <!--<div class="scan-input">
          <input style="display: none;" v-model="reference" class="" type="text" placeholder="Saisir n° de référence..." />
          <button style="display: none;" type="button" @click.prevent="authentifier">
            <svg
              style="height: 20px; width: 200px; color: #ffffff"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="7"
              fill="#FFFFFF"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>-->
      </div>
    </div>
    <scan-result-modal :pdf-src="certificat"/>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import axios from "axios"

export default {
  data() {
    return {
      error: "",
      camera: "on",
      isLoading:false,
      certificat:""
    };
  },
  components: {
    QrcodeStream
  },
  methods: {
    onDecode(decodedString) {
      this.camera = "off";
      this.authentifier(decodedString);
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permission";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        } else if (error.name === "InsecureContextError") {
          this.error =
            "ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.";
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
        console.log(error);
      }
    },
    authentifier(strResult)
    {
      this.camera="off";
      if(strResult.length<5)
      {
        this.$swal(
                {
                  title:"Reference invalide",
                  timer:5000,
                  toast:true,
                  showConfirmButton:false,
                  icon:'error'
                });
        return false;
      }
      this.isLoading=true;
      var formData=new FormData();
      formData.append("reference",strResult);
      axios.post(this.$store.state.baseURL+"//publique/authentifier",formData).then((res)=>{
        var data=res.data;
        this.isLoading=false;
        if(data.reponse!==undefined)
        {
          var icon="";
          if(data.reponse.status==="success")
          {
            const blob = new Blob([data.reponse.certificat]);
            const objectUrl = URL.createObjectURL(blob);
            this.certificat = objectUrl;
            setTimeout(() => {
              this.$scanResultModal('show'); 
            }, 500);
          }
          else
          {
            /***
             * Afficher un message d'erreur
             * @type {string}
             */
            icon="error";
            this.$swal(
                    {
                      title:data.reponse.message,
                      timer:5000,
                      toast:true,
                      showConfirmButton:false,
                      icon:icon
                    }
            );
          }

        }
        else
        {
          this.$swal(
                  {
                    title:"Authentification Impossible",
                    timer:5000,
                    toast:true,
                    showConfirmButton:false,
                    icon:'error'
                  });
        }
      });
    }
  },
};
</script>

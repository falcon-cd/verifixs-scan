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
          <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__logo__shape-1" viewBox="0 0 317 120">
            <path d="M259.856,120H0V0H274l43,37.481Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__logo__shape-2" viewBox="0 0 317 120">
            <path d="M259.856,120H0V0H274l43,37.481Z" />
          </svg>

          <a href="#/home" class="ml-4">
            <img src="assets/images/VERIFIX_LOGO_COLOUR.png" style="height: 30px" alt="Verifix" />
          </a>
        </div>
        <!-- /.main-menu__logo -->
        <div class="main-menu__nav">
          <ul class="main-menu__list"></ul>
        </div>
        
      </div>
    </nav>
    <!-- /.main-menu -->

    <div class="stricky-header stricked-menu main-menu">
      <div class="sticky-header__content"></div>
      <!-- /.sticky-header__content -->
    </div>

    <div v-if="!certificat" class="container">

      <div class="main-scan">
        <div class="scan-card">
          <div class="text">
            <h2>SCAN QR CODE</h2>
          </div>
          <div class="qr-scanner" v-if="camera === 'auto'">
            <qrcode-stream class="" @decode="onDecode" :camera="camera">
              <div class="box">
                <div class="line"></div>
                <div class="angle"></div>
              </div>
            </qrcode-stream>
          </div>
          <div v-else class="qr-zone">
            <img style="border-radius: 20px;" class="scan-image-placeholder img-fluid" src="assets/images/qr-scan-img.jpg" @click.prevent="camera = 'auto'" />
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

    </div>
    <div class="container" v-else>
      <div class="main-scan">
        <div class="scan-card">
          <div class="text">
            <h2>succès !</h2>
          </div>
          
          <div class="qr-zone">
            <img class="scan-image-placeholder img-fluid" src="assets/images/success.png" @click.prevent="certificat = ''" />
            <p class="text-white">Cliquez pour rescanner !</p>
          </div>
        </div>
      </div>
    </div>
    <scan-result-modal :pdf-src="certificat" />
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import axios from "axios";

export default {
  data() {
    return {
      error: "",
      camera: "on",
      isLoading: false,
      certificat: "",
    };
  },
  components: {
    QrcodeStream,
  },

  methods: {
    onDecode(decodedString) {
      this.camera = "off";
      this.authentifier(decodedString);
    },

    authentifier(strResult) {
      this.camera = "off";
      if (strResult.length < 5) {
        this.$swal({
          title: "Reference invalide",
          timer: 5000,
          toast: true,
          showConfirmButton: false,
          icon: "error",
        });
        return false;
      }
      this.isLoading = true;
      var formData = new FormData();
      formData.append("reference", strResult);
      axios
        .post(this.$store.state.baseURL + "//publique/authentifier", formData)
        .then((res) => {
          var data = res.data;
          //console.log(JSON.stringify(data));
          this.isLoading = false;
          if (data.reponse !== undefined) {
            var icon = "";
            if (data.reponse.status === "success") {
              let b64 = data.reponse.certificat_base64;
              const blob = this.$base64toBlob(b64, 'application/pdf');
              const pdfUrl = URL.createObjectURL(blob);
              this.certificat = pdfUrl;
              this.$scanResultModal('show');
            } else {
              /***
               * Afficher un message d'erreur
               * @type {string}
               */
              icon = "error";
              this.$swal({
                title: data.reponse.message,
                timer: 5000,
                toast: true,
                showConfirmButton: false,
                icon: icon,
              });
            }
          } else {
            this.$swal({
              title: "Authentification Impossible",
              timer: 5000,
              toast: true,
              showConfirmButton: false,
              icon: "error",
            });
          }
        });
    },
  },
};
</script>



<template>
  <div class="page-wrapper">
    <x-loading v-if="isLoading" />

    <div class="topbar topbar--two">
      <div class="container">
        <div class="topbar__info">
          <a href="#"><i class="fa fa-map-marked"></i> 03, AV.Bismarck, Q.Golf C/Gombe kinshasa, Réf. Terrain
            maman
            Yemo</a>
          <a href="mailto:contant@verifixs.com"><i class="fa fa-envelope"></i> contant@verifixs.com</a>
        </div>
        <!-- /.topbar__info -->

        <div class="topbar__social">
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
        </div>
        <!-- /.topbar__social -->
      </div>
      <!-- /.container-fluid -->
    </div>

    <nav class="main-menu main-menu--two">
      <div class="container">
        <div class="main-menu--two__inner">
          <div class="main-menu__logo">
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1092.22 207.66" width="140" height="41">
                <g id="Calque_2" data-name="Calque 2">
                  <g id="COMP_02" data-name="COMP 02">
                    <path class="cls-1"
                      d="M216,207.66c-10.67,0-14.94,0-22.95-6.94l-11-9.61C171.93,182,169,176.16,169,162.28V112.9c0-13.61,1.87-21.61,12.55-30.69l9.07-7.74c12-10.41,17.89-10.68,28.3-10.68H242.4c12.54,0,18.42,1.34,28.29,9.35l10.41,8.27c11.74,9.34,13.34,19.22,13.34,33.36v20.56c0,14.68-2.4,18.95-17.61,18.95H194.62v8.54c0,2.4,1.87,5.6,3.73,7.47l6.41,6.94c3.47,3.74,8.54,4.81,17.09,4.81h55c8.54,0,17.61,1.87,17.61,12.81,0,11.21-10.14,12.81-17.61,12.81Zm-21.35-79h74.2V113.17c0-4.8.27-8.81-3.2-12l-9.88-8.54c-3.2-2.94-8.27-3.2-12.28-3.2H221.85c-4.81,0-8.82,0-13.08,2.93L200,98.76c-3.21,2.4-5.34,4.27-5.34,11.74Z" />
                    <path class="cls-1"
                      d="M352.8,82.74c0-9.34,1.07-18.95,12.81-18.95,10.14,0,12.81,8.54,12.81,17.08V91.29l20-16.55c7.21-5.88,14.68-10.95,22.69-10.95h20.55c9.88,0,18.15,3.21,25.09,10.14,8.54,8.55,11.48,17.36,11.48,29.1,0,8.81-1.6,17.88-12.54,17.88-9.35,0-13.08-7.47-13.08-15.75,0-4.27,0-7.47-2.67-11.21-3.21-4.53-9.35-4.53-15.48-4.53H427c-4.8,0-8.27,2.4-12.81,6.14l-35.77,29.62V190c0,8.81-1.86,17.62-12.81,17.62S352.8,198.85,352.8,190Z" />
                    <path class="cls-1"
                      d="M591,182h19.22c8.54,0,17.61,1.87,17.61,12.81,0,11.21-10.14,12.81-17.61,12.81H545c-7.47,0-17.62-1.6-17.62-12.81,0-10.94,9.08-12.81,17.62-12.81h20.29V89.42H545c-7.47,0-17.62-1.6-17.62-12.81,0-11,9.08-12.82,17.62-12.82h27c14.68,0,19,2.67,19,17.89ZM552.25,12c0-9.07,5.07-12,12-12h14.68c6.94,0,12,2.94,12,12V24.29c0,9.07-5.07,12-12,12H564.26c-6.94,0-12-2.94-12-12Z" />
                    <path class="cls-1"
                      d="M692.91,89.15H685.7c-7.47,0-17.62-1.6-17.62-12.81,0-11,9.08-12.82,17.62-12.82h7.21V60.05c0-14.68.8-25.35,12.27-36.56,12.28-11.75,23.76-12.81,39.51-12.81H762c8.81,0,18.68.8,18.68,12.81,0,10.94-8.81,12.81-17.61,12.81h-20c-17.35,0-24.56,3.47-24.56,22.15v5.07h22.69c8.54,0,17.61,1.87,17.61,12.82,0,11.21-10.14,12.81-17.61,12.81H718.53V189.78c0,8.8-1.87,17.61-12.81,17.61s-12.81-8.81-12.81-17.61Z" />
                    <path class="cls-1"
                      d="M876.17,182h19.21c8.54,0,17.62,1.87,17.62,12.81,0,11.21-10.14,12.81-17.62,12.81H830.26c-7.48,0-17.62-1.6-17.62-12.81,0-10.94,9.08-12.81,17.62-12.81h20.28V89.42H830.26c-7.48,0-17.62-1.6-17.62-12.81,0-11,9.08-12.82,17.62-12.82h27c14.68,0,18.95,2.67,18.95,17.89ZM837.46,12c0-9.07,5.08-12,12-12h14.68c6.94,0,12,2.94,12,12V24.29c0,9.07-5.07,12-12,12H849.48c-6.94,0-12-2.94-12-12Z" />
                    <path class="cls-1"
                      d="M1012.14,135.86,972.9,89.42c-2.93-3.74-6.13-7.21-6.13-12,0-7.2,5.6-13.61,12.81-13.61,7.74,0,12.81,8,17.35,13.61l32.56,40,32.56-40c4.54-5.6,9.61-13.61,17.36-13.61,7.2,0,12.81,6.41,12.81,13.61,0,4.81-3.2,8.28-6.14,12l-39.24,46.44,39.24,46.44c2.94,3.74,6.14,7.21,6.14,12,0,7.21-5.61,13.35-12.81,13.35-7.75,0-12.82-7.74-17.36-13.35l-32.56-40-32.56,40c-4.54,5.61-9.61,13.35-17.35,13.35-7.21,0-12.81-6.14-12.81-13.35,0-4.8,3.2-8.27,6.13-12Z" />
                    <path class="cls-2"
                      d="M101.88,0C92.27,0,88.54,4.8,88.54,13.35v42.7L49.3,158l-23-59.9a11.23,11.23,0,0,0-10.48-7.19H11.24A11.22,11.22,0,0,0,.79,106.24L36,195.91c2.66,6.68,5.07,11.75,13.34,11.75S60,202.59,62.65,195.91l51-130a27.56,27.56,0,0,0,1.6-10.41V13.35C115.23,4.8,111.49,0,101.88,0Z" />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <!-- /.main-menu__logo -->
          <div class="main-menu__nav">
            <ul class="main-menu__list">

            </ul>
          </div>
          <!-- /.main-menu__nav -->
          <div class="main-menu__right">

            <a href="https://account.verifixs.com" target="_blank" class="main-menu__search">


              <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
              <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>i</title>
                <g id="Complete">
                  <g id="user-add">
                    <g>
                      <path d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#ffffff"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      <circle cx="9" cy="7" r="4" fill="none" stroke="#ffffff" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" />
                      <line x1="17" y1="11" x2="23" y2="11" fill="none" stroke="#ffffff" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" />
                      <line x1="20" y1="8" x2="20" y2="14" fill="none" stroke="#ffffff" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" />
                    </g>
                  </g>
                </g>
              </svg>
            </a>

            <!-- /.thm-btn -->
          </div>
          <!-- /.main-menu__right -->
        </div>
        <!-- /.main-menu--two__inner -->
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.main-menu -->

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
            <img style="border-radius: 20px;" class="scan-image-placeholder img-fluid" src="assets/images/qr-scan-img.jpg"
              @click.prevent="camera = 'auto'" />
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
            <img class="scan-image-placeholder img-fluid" src="assets/images/success.png"
              @click.prevent="certificat = ''" />
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
<style>
svg .cls-1 {
  fill: #f4f6f9;
}

svg .cls-2 {
  fill: #33cc7c;
}
</style>


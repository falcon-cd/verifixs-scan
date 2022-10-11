<template>
    <div class="modal fade rating_modal modal-fullscreen" id="scanResultModal" tabindex="-1" role="dialog"
        aria-labelledby="rating_modal" style="display: none" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" style="display: none;" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <button href="#" data-target="#scanResultModal" data-toggle="modal" class="trigger"
                    style="display: none"></button>
                <!-- end /.modal-header -->

                <div class="modal-body">
                    <div id="Iframe-Master-CC-and-Rs" class="set-margin set-padding set-border set-box-shadow center-block-horiz">
                        <div class="responsive-wrapper 
                           responsive-wrapper-wxh-572x612"
                           style="-webkit-overflow-scrolling: touch; overflow: auto;">
                          
                          <iframe :src="pdfSrc"> 
                          </iframe>
                          
                        </div>
                      </div>
                </div>
                <!-- end /.modal-body -->
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        pdfSrc: String
    },

};

/**
 * How to use it
 *
 * data(){
 *   return {
 *      checked: "",
 *   }
 * }
 *
 *
 * HTML
 *
 * <a
    href="#privacyModal"
    data-target="#privacyModal"
    data-toggle="modal"
    class="link"
    >open modal here</a
  >
 *
 * <privacy-modal
        pdfSrc="assets/privacy-policy.pdf"
        @onAccepted="checked = $event"
        @onRefused="checked = $event"
    ></privacy-modal>
 *
**/
</script>

<style>
/* CSS for responsive iframe */
/* ========================= */

/* outer wrapper: set max-width & max-height; max-height greater than padding-bottom % will be ineffective and height will = padding-bottom % of max-width */
#Iframe-Master-CC-and-Rs {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

/* inner wrapper: make responsive */
.responsive-wrapper {
  position: relative;
  height: 0;
}

.responsive-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
}

/* padding-bottom = h/w as % -- sets aspect ratio */
/* YouTube video aspect ratio */
.responsive-wrapper-wxh-572x612 {
  padding-bottom: 107%;
}

/* general styles */
/* ============== */
.set-border {
  border: none;
}
.set-padding {
  padding: 0;
}
.set-margin {
  margin: 0;
}
.center-block-horiz {
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
  
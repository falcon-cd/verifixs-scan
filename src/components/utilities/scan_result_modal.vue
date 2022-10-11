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
                    <p>{{currentPage}} / {{pageCount}}</p>
                    <pdf :src="pdfSrc" @num-pages="pageCount = $event"
                    @page-loaded="currentPage = $event"></pdf>
                </div>
                <!-- end /.modal-body -->
            </div>
        </div>
    </div>
</template>
  
<script>
import pdf from "vue-pdf";
export default {
    props: {
        pdfSrc: String
    },
    components: { pdf },
    data() {
		return {
			currentPage: 0,
			pageCount: 0,
		}
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
  
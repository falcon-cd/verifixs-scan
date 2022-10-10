<template>
  <div>
    <transition name="loading">
      <div class="modal-mask1">
        <div class="modal-wrapper1">
          <div class="modal-container1">
            <img src="assets/images/loader.gif" style="height: 50px; width: 50px; " />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style>
.modal-mask1 {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(95, 96, 97, 0.308);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}


.modal-container1 {
  width: 100px;
  height: 100px;
  margin: 0px auto;
  padding: 0;
  border-radius: 5px;
  transition: all 0.3s ease;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.loading-enter {
  opacity: 0;
}

.loading-leave-active {
  opacity: 0;
}

.loading-enter .modal-container1,
.loading-leave-active .modal-container1 {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

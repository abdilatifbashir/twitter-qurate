<template>
  <div class="grid grid-cols-7 bg-gray-500 h-screen">
    <div class="  col-span-5" :class="{ 'col-span-7': !sideBar }">
      <div class="grid grid-rows-7">
        <div class="row-span-3 bg-gray-50">
          <Menu />
        </div>
      </div>
      <!------modals --->
      <div v-if="twitModal" class="twitter-modal">
        <TwitterPost />
      </div>
      <div v-if="plusModal"><PlusModal /></div>
      <!----- other content modal ----->
      <div v-if="otherContentModal"><OtherContentModal /></div>
      <!-------extra fields ---->
      <div v-if="extraFieldFormOne"><ExtraFieldsFormOne /></div>
      <div v-if="extraFieldFormTwo"><ExtraFieldsFormTwo /></div>
    </div>
    <!-----side Bar ---->
    <div v-if="sideBar" class="col-span-2 bg-gray-50 border-l-2">
      <SideBar />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Menu from "../components/Menu.vue";
import SideBar from "../components/SideBar.vue";
import TwitterPost from "../components/modals/TwitterPost.vue";
import PlusModal from "../components/modals/PlusModal.vue";
import OtherContentModal from "../components/modals/OtherContentModal.vue";
import ExtraFieldsFormOne from "../components/modals/ExtraFieldsFormOne.vue";
import ExtraFieldsFormTwo from "../components/modals/ExtraFieldsFormTwo.vue";

import store from "@/store";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "Landing",
  components: {
    Menu,
    TwitterPost,
    SideBar,
    PlusModal,
    OtherContentModal,
    ExtraFieldsFormOne,
    ExtraFieldsFormTwo,
  },
  // data() {
  //   return {
  //     twitModal: store.state.twitModal,
  //   };
  // },
  computed: mapGetters([
    "twitModal",
    "plusModal",
    "otherContentModal",
    "extraFieldFormOne",
    "extraFieldFormTwo",
    "sideBar",
  ]),
  // created()
  //   console.log("getters",store.getters.twitModal)
  // },
});
</script>

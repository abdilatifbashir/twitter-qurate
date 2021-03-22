<template>
  <div>
    <div class="flex justify-between border-b py-1">
      <!----save Button ---->
      <div class="flex items-center p-1">
        <span class="px-2">
          <img src="../assets/twitter.svg" class="w-6" />
        </span>
        <span> <CancelButton /> </span>
      </div>
      <!------save Button ---->
      <div class="px-2 py-3">
        <SaveButton />
      </div>
    </div>
    <!-----content ----->
    <div class="flex justify-between border-b  ">
      <div class="flex items-center gap-4  ">
        <div
          @click="setTwitModal"
          class=" cursor-pointer text-gray-500 hover:text-black min-nav"
        >
          content
        </div>
        <div
          @click="setPlusModal"
          class="cursor-pointer text-gray-500 hover:text-black min-nav"
        >
          Extra fields
        </div>
      </div>
      <!------tablets here ---->
      <div>
        <!-- <CancelButton />  tablet-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CancelButton from "./buttonBoxes/CancelButton.vue";
import SaveButton from "./buttonBoxes/SaveButton.vue";
import store from "@/store";
import { mapActions } from "vuex";
export default defineComponent({
  name: "Menu",
  components: {
    CancelButton,
    SaveButton,
  },
  methods: {
    ...mapActions(["setTwitModal", "setPlusModal"]),
  },
  data() {
    return {
      // name :store.state.name
      // twitModal :store.state.twitModal,
    };
  },
  created() {
    // console.log("Hi qurate ",this.name)
  },
});
</script>

<style scoped>
.min-nav:hover {
  border-bottom: 4px solid blue;
  border-radius: 2px;
  position: relative;
  top: 1px;
  /* margin-top: 2px; */
}
</style>

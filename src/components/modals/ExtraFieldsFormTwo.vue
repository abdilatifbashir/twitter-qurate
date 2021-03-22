<template>
  <div class=" w-72 bg-white absolute top-60 left-120 ">
    <div
      class="float-right rounded-full border-solid  bg-gray-200 relative bottom-3 p-1"
    >
      <span @click="setExtraFieldsFormTwo" class="text-gray-400 w-1 h-1">x</span>
    </div>
    <div class=" ml-6">
      <label for="name">Name</label>
      <input type="text" class=" outline-none border-4 border-blue-50" />
    </div>
    <div class=" ml-6 py-2">
      <label for="name">Hint</label>
      <input
        type="text"
        class="block outline-none border-4 border-blue-50"
        placeholder="Hint"
      />
    </div>

    <div class="text-center pb-4 ml-6" @click="setExtraFieldsFormTwo">
      <button
        class="block w-52 h-6 rounded-full bg-twitterBlue-500 text-white"
        type="submit"
      >
        update
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  name: "ExtraFieldsFormOne",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["toggleTwitModal", "postTwit", "setExtraFieldsFormTwo"]),
  },
});
</script>

<template>
  <div
    class="absolute top-32 left-96 flex items-center bg-gray-100 py-6 rounded px-8"
  >
    <span class="bg-gray-100 w-48 border-b-2 border-gray-200 "></span>
    <span @click="setOtherContentModal" class=" cursor-pointer">
      <svg
        class="w-4  text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
    <span class="bg-gray-100 w-48 border-b-2 border-gray-200"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { mapActions } from "vuex";
export default defineComponent({
  name: "PlusModal",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setOtherContentModal"]),
  },
});
</script>

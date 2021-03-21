<template>
  <div class="w-5/12 pt-12 pb-12 absolute top-32 left-66 bg-gray-100  rounded">
    <div class="border-t-2 border-gray-200 flex justify-between">
      <div class="flex items-center px-4 pt-2">
        <span class="p-2">
          <svg
            class="w-6 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </span>
        <span class="text-gray-600">Field one</span>
      </div>
      <div class="pr-6 mt-4">
        <svg
          class="w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
    <div class="text-center h-16 border-b-2 border-gray-200  pb-6">
      <input
        type="text"
        class="w-96 h-12 outline-none rounded border-blue-100 border-2"
      />
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
  
});
</script>

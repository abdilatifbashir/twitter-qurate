<template>
  <div>
    <div class="flex items-center gap-6 pt-2 border-gray-200 border-b-2 p-4">
      <!--------->
      <div class="pl-4">
        <svg
          class="w-6 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      </div>
      <div>
        <svg
          class="w-6 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>

      <div>
        <svg
          class="w-6 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      </div>
      <div>
        <svg
          class="w-6 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <div>
        <svg
          class="w-6 text-gray-300 ml-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div @click="closeSideBar" class="py-2 px-2  rounded bg-gray-600">
        <svg
          class="w-6 pr-2 text-gray-300 ml-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>

    <!-----identifier -->
    <div class="pt-6 pl-4 text-gray-400">
      <span>Identifier</span>
    </div>

    <div class="pt-3 pl-4 text-gray-400">
      <span>Title</span>
    </div>

    <div class="flex gap-8 pt-6 pl-4 text-gray-500">
      <span>Published Date</span>
      <span
        ><input
          type="text"
          placeholder="Select Date"
          class="w-48 outline-none border-gray-200 rounded border-2"
      /></span>
    </div>
    <div class="pt-4 px-5">
      <hr />
    </div>

    <div class="flex justify-between pl-4 pt-3 text-gray-500">
      <span class="text-xl">Strategy</span>
      <span class="pr-6"
        ><svg
          class="w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7l4-4m0 0l4 4m-4-4v18"
          /></svg
      ></span>
    </div>
    <div class="flex items-center gap-20 pl-4 pt-3 text-gray-500">
      <span>
        Personas
      </span>
      <span class="bg-gray-200 rounded-full px-2">+</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { mapActions } from "vuex";
export default defineComponent({
  name: "SideBar",
  components: {},
  methods: {
    ...mapActions(["closeSideBar"]),
  },
});
</script>

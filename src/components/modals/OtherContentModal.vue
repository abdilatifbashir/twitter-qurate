<template>
  <div class=" w-56  absolute top-56 left-70  bg-gray-100 py-6 rounded px-8">
    <!-- <span></span> -->
    <div class="flex justify-between gap-6">
      <div @click="setExtraFieldsModal">
        <Span class="bg-gray-200 py-2 px-4 rounded">String</Span>
      </div>
      <div @click="setExtraFieldsModal">
        <Span class="bg-gray-200 py-2 px-4 rounded">video</Span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  name: "OtherContentModal",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["toggleTwitModal", "setExtraFieldsModal"]),
  },
});
</script>

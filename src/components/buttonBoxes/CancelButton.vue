<template>
    <div class="w-auto px-2  h-6 rounded-full text-white bg-gray-400 outline-none">
        <button>cancel</button>
    </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CancelButton",
  props:['btn'],
  components: {
    
  },
});
</script>
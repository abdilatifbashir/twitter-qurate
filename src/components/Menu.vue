<template>
  <div>
    <div  class="flex justify-between border-b py-1">
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
    <div  class="flex justify-between border-b pt-1 ">
      <div class="flex items-center gap-4  p-2">
        <div class="text-gray-500 hover:text-black hover:border-b-4 hover:border-blue-600">
          content
        </div>
       <div class="text-gray-500 hover:text-black">
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

export default defineComponent({
  name: "Menu",
  components: {
    CancelButton,
    SaveButton
  },
});
</script>

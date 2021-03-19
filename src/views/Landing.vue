<template>

    <div class="grid grid-cols-7 bg-gray-500 h-screen">
        <div class="  col-span-5">
            <div class="grid grid-rows-7">
                <div class="row-span-3 bg-gray-50">
                    <Menu />
                </div>

            </div>
        </div>
        <div class="col-span-2 bg-gray-50 border-l-2">
            <h1>hi sidebar</h1>
            

        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Menu from "../components/Menu.vue"
export default defineComponent({
  name: "Landing",
  components: {
      Menu
    
  },
});
</script>
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {},
  created() {
    console.log("all state here", this.$store.state);
  },
});
</script>

<style scoped></style>

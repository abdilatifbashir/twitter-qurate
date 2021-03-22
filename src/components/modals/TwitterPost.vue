<template>
  <div class="absolute top-32 left-66">
    <!-- <h1>twitter post</h1> -->
    <div class="w-96 rounded-lg shadow-lg bg-gray-50">
      <!----Header --->
      <div class="border-b border-gray-400 text-gray-400">
        <div class="p-4" @click="toggleTwitModal">
          <svg
            class="text-twitterBlue-500 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <!----body ---->
      <div class="relative p-4 pl-20">
        <img
          src="../../assets/abdilatif.jpg"
          class="ml-4 mt-4 w-6 rounded-full absolute left-0 top-0"
        />
        <textarea
          v-model="post"
          @keypress="continuePost"
          rows="5"
          class="outline-none bg-transparent pt-1 w-full text-gray-500 text-lg"
          placeholder="What`s happening?"
        ></textarea>
      </div>
      <!------------->
      <div>
        <!-- <span>hiiiiii</span> -->
        <!-- <span>yyyyyy</span> -->
      </div>

      <!----footer ---->
      <div class="pl-20 pr-4 pb-4 flex justify-between">
        <div class="flex text-2xl items-center">
          <div class="mr-2">
            <svg
              class="w-6 text-twitterBlue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div class="mr-2">
            <svg
              class="w-6 text-twitterBlue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg>
          </div>
          <div class="mr-2">
            <svg
              class="w-6 text-twitterBlue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <svg
              class="w-6 text-twitterBlue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div>
          <svg
            class="w-6 text-twitterBlue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  name: "TwitterPost",
  components: {},
  data() {
    return {
      post: "",
    };
  },
  methods: {
    ...mapActions(["toggleTwitModal", "postTwit"]),
    continuePost() {
      this.$store.commit("setTwitPost", this.post);
    },
  },
  computed: {
    postedTwit: () => {
      // return postTwit(post);
      // console.log("new state",this.$st)
    },
  },
});
</script>

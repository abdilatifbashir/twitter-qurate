import { createStore } from "vuex";

export default createStore({
  state: {
    twitModal: false,
    otherContenModal:false,
    plusModal:false,
    extraFieldFormOne:false,
    extraFieldFormTwo:false,
    twitPost: "",
    sideBar :true

  },
  getters: {

    twitModal: (state) => state.twitModal,
    plusModal: (state) => state.plusModal,
    otherContentModal: (state) => state.otherContenModal,
    extraFieldFormOne:(state) => state.extraFieldFormOne,
    extraFieldFormTwo :(state) => state.extraFieldFormTwo,
    sideBar : (state) => state.sideBar 

    
  },
  mutations: {
    setTwitPost: (state, postMessage) => (state.twitPost = postMessage)
  },
  actions: {
    async setTwitModal({ commit }) {
      this.state.twitModal = true
      this.state.plusModal = false
      this.state.otherContenModal = false
      this.state.extraFieldFormTwo=false
      this.state.extraFieldFormOne=false
    },
    setPlusModal({commit}){
      this.state.plusModal=true
      this.state.twitModal=false
      this.state.extraFieldFormOne= false
  
    
    },
    setOtherContentModal({commit}){
      this.state.otherContenModal = true
      this.state.twitModal = false
      

    },
    setExtraFieldsModal({commit}){
      this.state.extraFieldFormOne = true
      this.state.extraFieldFormTwo = true
      this.state.otherContenModal = false
      this.state.plusModal= false
    },
    setExtraFieldsFormTwo({commit}){
      this.state.extraFieldFormTwo =  false
    },
    async toggleTwitModal({ commit },) {
      this.state.twitModal = false
    },
    closeSideBar(){
      this.state.sideBar = false
    },
   async postTwit({ commit }, postMessage) {
      commit("setTwitPost", postMessage)
    }

  },
  modules: {}
});

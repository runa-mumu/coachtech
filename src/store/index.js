import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: "",
  },
  mutations: {
    changeData(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    async changeDataAction(context) {
      let data = await axios.get("data.json");
      context.commit("changeData", data);
    },
  },
});


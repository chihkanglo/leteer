import Vue from "vue";
import Vuex from "vuex";
import lettersModule from "./letters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { lettersModule: lettersModule },
});

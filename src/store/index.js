import Vue from "vue";
import Vuex from "vuex";
import { people } from "./modules/people";
import { messages } from "./modules/message";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    people,
    messages
  }
});
import Vue from "vue";

export const mutations = {
  setPeople(state, people) {
      Vue.set(state, "people", people);
  },
  addPerson(state, person) {
    let people = state.people;
    people.push(person);
    Vue.set(state, "people", people);
  }
};
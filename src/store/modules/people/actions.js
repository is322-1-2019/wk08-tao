import axios from "axios";

const backend_url = "http://localhost:3000/people";

export const actions = {
  getPeople(context) {
    axios.get(backend_url)
      .then(response => {
        let people = response.data;
        context.commit("setPeople", people);
      })
      .catch(() => {
        context.commit("setPeople", null);
      });
  },
  addPerson(context, person){
    axios.post(backend_url, person)
      .then(() => {
        context.commit("addPerson", person);
      });
  },
  deletePerson(context, person){
    axios.delete(backend_url + "/" + person.id)
      .then(() => {
        context.commit("deletePerson", person);
      });
  }
};

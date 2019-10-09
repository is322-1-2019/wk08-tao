export const actions = {
    getPeople(context) {
      //TODO get people from API
      context.commit("setPeople", null);
    },
    addPerson(context, person){
      context.commit("addPerson", person);
    }
  };
  
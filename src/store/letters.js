const initializeState = {
  letters: [],
  total: 0,
  index: 0,
};

const lettersModule = {
  namespaced: true,
  state: { ...initializeState },
  actions: {
    postLetter({ commit }, letter) {
      commit("addLetter", letter);
    },
    deleteLetter({ commit }, id) {
      commit("removeLetter", id);
    },
    updateLetter({ commit }, newLetter) {
      commit("editLetter", newLetter);
    },
  },
  mutations: {
    addLetter(state, letter) {
      state.letters.push(letter);
      state.total += 1;
    },
    removeLetter(state, id) {
      state.letters = state.letters.filter((letter) => letter.id !== id);
    },
    editLetter(state, newLetter) {
      state.letters = state.letters.map((letter) => {
        if (letter.id === newLetter.id) return newLetter;
        return letter;
      });
    },
  },
  getters: {
    letters(state) {
      return state.letters.sort(
        (current, next) => next.createdAt - current.createdAt
      );
    },
  },
};

export default lettersModule;

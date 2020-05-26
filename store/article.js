export const state = () => ({
    type: '',
});
const mutations = {
    SET_TYPE(state, value) {
        state.type = value;
    }
};

export default {
    namespaced: true,
    state,
    mutations
};
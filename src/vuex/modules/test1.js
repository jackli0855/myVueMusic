// make sure to call Vue.use(Vuex) if using a module system

const state = {
  count: 0
}
const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--
}
const actions = {
}

export default {
  state,
  mutations,
  actions
}

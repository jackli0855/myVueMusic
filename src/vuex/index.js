import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/test1'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common
  }
})

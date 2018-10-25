import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Form = {
  namespaced: true,
  state: {
    component: ['FormReligious', 'FormAttendant', 'FormOption', 'FormEstimate']
  },
  mutations: {},
  actions: {
    nextButtonAction ({ commit, state, rootState }) {
      console.log('nextButtonAction')
      commit('setStepCountUp', null, {root: true}) // rootへのアクセス
    },
    prevButtonAction ({ commit, state, rootState }) {
      console.log('prevButtonAction')
      commit('setStepCountDown', null, {root: true}) // rootへのアクセス
    }
  },
  getters: {
    getComponent (state, getters, rootState) {
      console.log('getComponent')
      return state.component[rootState.stepCount]
    }
  }
}

export default new Vuex.Store({
  state: {
    stepCount: 0
  },
  mutations: {
    setStepCountUp (state) {
      console.log('rootsetStepCountUp')
      state.stepCount++
    },
    setStepCountDown (state) {
      console.log('rootsetStepCountDown')
      state.stepCount--
    },
    setProperty (state, poroperty) {
      console.log(poroperty)
      state.property[state.stepCount] = Object.assign(state.property[state.stepCount], poroperty)
    }
  },
  modules: {
    Form
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Form = {
  namespaced: true,
  state: {
    component: ['FormAttendant', 'FormPlace', 'FormScale', 'FormOption', 'FormOther', 'FormEstimate']
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

const plan = {
  religion: {
    '仏教': 10000,
    'キリスト教': 20000,
    '神道': 5000,
    'イスラム教': 5000,
    '無宗教': 10000,
    'わからない': 10000
  },
  attendant: {
    '家族': 5000,
    '家族・親戚周り': 10000,
    '家族・友人': 30000,
    '家族・友人・親戚周り': 50000
  },
  option: {
    'メッセージサービス': 1000,
    '伝記製本': 2000
  }
}

export default new Vuex.Store({
  state: {
    stepCount: 0,
    property: {
      religion: '',
      attendant: '',
      place: '',
      scale: '',
      other: '',
      option: []
    }
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
    setProperty (state, property) {
      console.log(property)
      state.property = Object.assign(state.property, property)
    }
  },
  getters: {
    // 料金概算をよしなに計算
    getPrice (state) {
      let price = 0

      for (let key in state.property) {
        if (plan[key]) {
          if (Array.isArray(state.property[key])) {
            for (let val of state.property[key]) {
              if (plan[key][val]) {
                price += plan[key][val]
              }
            }
          } else {
            if (plan[key][state.property[key]]) {
              price += plan[key][state.property[key]]
            }
          }
        }
      }

      console.log('getPrice', price)

      return price
    }
  },
  modules: {
    Form
  }
})

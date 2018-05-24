import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  familyName: '',
  givenName: '',
  familyNameKana: '',
  givenNameKana: '',
}

const mutations = {
  setFamilyName (state, val) {
    state.familyName = val
  },
  setGivenName (state, val) {
    state.givenName = val
  },
  setFamilyNameKana (state, val) {
    state.familyNameKana = val
  },
  setGivenNameKana (state, val) {
    state.givenNameKana = val
  },
}

const getters = {
  fullName: (state) => {
    return `${state.familyName}${state.givenName}`
  },
  isValidFamilyName: (state) => {
    return String(state.familyName).trim() !== ''
  },
  isValidGivenName: (state) => {
    return String(state.givenName).trim() !== ''
  },
  isVisibleKana: (state, getters) => {
    return getters.isValidFamilyName && getters.isValidGivenName
  },
  fullNameKana: (state) => {
    return `${state.familyNameKana}${state.givenNameKana}`
  },
}

const actions = {
  updateFamilyNameKana ({ commit, state, }, e) {
    commit('setFamilyNameKana', e.target.value)
  },
  updateGivenNameKana ({ commit, state, }, e) {
    commit('setGivenNameKana', e.target.value)
  },
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})

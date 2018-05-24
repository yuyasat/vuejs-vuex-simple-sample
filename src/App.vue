<template>
  <div id="app">
    <div>
      名前：<input type="text" name="familyName" v-model="familyName">
      <input type="text" name="givenName" v-model="givenName">
    </div>
    <div>フルネーム：{{ fullName }}</div>
    <div>firstName：{{ firstName }}</div>
    <div v-show="isVisibleKana">
      ナマエ：<input type="text" name="familyNameKana" @input="updateFamilyNameKana">
      <input type="text" name="givenNameKana" @input="updateGivenNameKana">
    </div>
    <div v-show="isVisibleKana">フルネーム（カナ）：{{ fullNameKana }}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex, { mapState, mapGetters, mapActions, } from 'vuex'

import store from './stores'

Vue.use(Vuex)

export default {
  name: 'App',
  store,
  computed: {
    familyName: {
      get () { return store.state.familyName },
      set (val) { store.commit('setFamilyName', val) },
    },
    givenName: {
      get () { return store.state.givenName },
      set (val) { store.commit('setGivenName', val) },
    },
    ...mapState({
      firstName: 'givenName',
    }),
    ...mapGetters([
      'fullName',
      'isVisibleKana',
      'fullNameKana',
    ]),
  },
  methods: {
    ...mapActions([
      'updateFamilyNameKana',
      'updateGivenNameKana',
    ]),
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

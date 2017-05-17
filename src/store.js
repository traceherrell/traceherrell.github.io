import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  people: [],
  menuItems: []
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  addPerson (state, person) {
    state.people.push(person)
  },
  removePerson (state, person) {
    state.people = _.filter(state.people, (p) => {
      return p.id !== person.id
    })
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  addPerson: ({ commit }, person) => commit('addPerson', person),
  removePerson: ({ commit }, person) => commit('removePerson', person)

}

// getters are functions
const getters = {
  people: state => state.people,
  menuItems: sate => state.menuItems
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

import { createStore } from 'vuex'

const store = createStore({
  state () {
    return  {
      count: 0
    }
  },
  mutations: {
    increment (state: any) {
      state.count+= 2
    }
  }
})

export default store
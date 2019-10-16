import * as types from './mutation-types'
const matations = {

  [types.SET_TOKEN] (state, v) {
    state.token = v
  },
  [types.SET_USERINFO] (state, v) {
    state.userinfo = v
  },
  [types.SET_WINFO] (state, v) {
    state.wechat_info = v
  }
}

export default matations

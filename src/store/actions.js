import fly from '../utils/fly'

const actions = {

  // 开方时更换供应商或更换模板处方
  'chkaifang' ({commit, state}, action) {
    // let payload = action
    // let sid = payload.sid || state.pharsid
    // let mtid = payload.mtid || state.pharmtid
    // let jsonyao = payload.skulist || state.skulist || []
    // if (!jsonyao.length) { return }
    // console.log(jsonyao)
    // fly.post('/sku/research', {sid: sid, mtid: mtid, jsonyao: JSON.stringify(jsonyao)}).then((res) => {
    //   if (res.status === 1) {
    //     commit('setskulist', res.data)
    //   } else {
    //     wx.showToast({title: '获取药材列表失败'})
    //   }
    // })
  }

}

export default actions

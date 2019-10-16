import Fly from 'flyio/dist/npm/wx'
// import store from '../store'
const fly = new Fly()
const host = 'https://aicai58.cn/smeal/'
console.log('进来3')
// 添加请求拦截器

fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  console.log(request)
  console.log('进来2')
  // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIiwianRpIjoid2F3YXR1YW4ifQ.eyJpc3MiOiJ3YXdhdHVhbiIsImF1ZCI6ImFwcCIsImp0aSI6Indhd2F0dWFuIiwiaWF0IjoxNTUwNjQzNzg5LCJuYmYiOjE1NTA2NDM3ODksImV4cCI6MTg2NjAwMzc4OSwidWlkIjoiMTAwMDAwIn0.'
  // token = store.state.token
  // const token = wx.getStorageSync('token') || ''
  var token
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjA2MTM0NDcsInVzZXJuYW1lIjoiMTU4MzI4ODYwOTcifQ.pJwBxZx_54uGgfFo3FxlTl23294f0L-mxMnakGbq8A8'
  // console.log('fly,token,', token)
  // if(!token){
  //   wx.showToast('请先登录')
  // }

  request.headers = {
    'X-Tag': 'flyio',
    'platform': 'wechat_mini',
    'content-type': 'application/x-www-form-urlencoded',
    'token': token
  }

  let authParams = {
    // 公共参数
    // "categoryType": "SaleGoodsType@sim",
    // "streamNo": "wxapp153570682909641893",
    // "reqSource": "MALL_H5",
    // "appid": "string",
    // "timestamp": new Date().getTime(),
    // "sign": "string"
    token: token
  }

  request.body && Object.keys(request.body).forEach((val) => {
    if (request.body[val] === '') {
      delete request.body[val]
    };
  })
  request.body = {
    ...request.body,
    ...authParams
  }
  return request
})

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    // return response.data;//请求成功之后将返回值返回

    return response.data
  },
  (err) => {
    // 请求出错，根据返回状态码判断出错原因
    console.log(err)
    wx.hideLoading()
    if (err) {
      return 'err'
    };
  }
)

fly.config.baseURL = host

export default fly

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState([
      'token'
    ])
  },
  created () {
    // if (!wx.getStorageSync('token')) {
    //   console.log('notoken')
    //   if (!wx.getStorageSync('authorized')) {
    //     console.log('no wechat_info')
    //     setTimeout(() => { wx.navigateTo({url: '/pages/registered/registered'}) }, 1000)
    //   } else {
    //     let vm = this
    //     wx.login({
    //       success (reslogin) {
    //         console.log(reslogin)
    //         wx.getUserInfo({
    //           success (resuserinfo) {
    //             console.log(resuserinfo)
    //             vm.$http.post('/auth/login', {wechat_code: reslogin.code, platform: 'wechat_mini', wechat_info: resuserinfo}).then((res) => {
    //               console.log('提交获取到的userinfo到服务器')
    //               if (res.msg === 'no_reg') {
    //                 wx.setStorageSync('authorize', '')
    //                 setTimeout(() => { wx.navigateTo({url: '/pages/registered/registered'}) }, 1000)
    //               } else {
    //                 console.log('已注册')
    //                 vm.setToken(res.data.token)
    //                 vm.setUinfo(Object.assign({}, res.data))
    //                 wx.setStorageSync('token', res.data.token)
    //                 wx.setStorageSync('authorized', '1')
    //                 wx.switchTab({url: '/pages/index/index'})
    //               }
    //             })
    //           },
    //           fail (res) {
    //             wx.setStorageSync('authorize', '')
    //             setTimeout(() => { wx.navigateTo({url: '/pages/registered/registered'}) }, 1000)
    //           }
    //         })
    //       }
    //     })
    //   }
    // }
  },
  methods: {
    ...mapMutations({
      setToken: 'SET_TOKEN',
      setUinfo: 'SET_USERINFO'
    })
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>

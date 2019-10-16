<template>
    <div class="may">
        <div class="header">
            <div class="left">
                <img src="http://img.aicai58.cn/lunbo1.png">
            </div>
            <div class="right">
                <p>园中园小学王小明</p>
                <p>152****6985</p>
            </div>
        </div>
        <div class="list">
            <div class="listTop">
                <img src="../../../static/images/u468.png">
            </div>
            <div class="datalist">
                <ul>
                    <li @click="IndaddressHref">
                        <img src="../../../static/images/p33.png">
                        <span>收货地址</span>
                    </li>
                    <li>
                        <img src="../../../static/images/p34.png">
                        <span>所属学校</span>
                    </li>
                    <li @click="tongxuenl">
                        <img src="../../../static/images/p35.png">
                        <span>联系人</span>
                    </li>
                    <li @click="calling">
                        <img src="../../../static/images/p36.png">
                        <span>联系电话</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.may{
    .header{
        display: flex;
        background: #48B152; 
        .left{
            width: 30%;
            padding: 28rpx;
            box-sizing: border-box;
            img{
                border: 3px solid #ffffff;
                width: 140rpx;
                height: 140rpx;
                border-radius: 50%;
            }
        }
        .right{
            width: 70%;
            font-size: 28rpx;
            font-weight: bold;
            color: #ffffff;
            padding-top: 60rpx;
        }
    }
    .list{
        margin-top: -20rpx;
        .listTop{
            img{
                width: 100%;
                height: 50rpx;
            }
        }
        .datalist{
            ul{
                li{
                    padding: 20rpx;
                    border-bottom: 1px solid #F4F4F4;
                    img{
                        width: 52rpx;
                        height: 52rpx;
                        margin:0 20rpx;
                        vertical-align: middle;
                    }
                    span{
                        font-size: 28rpx;
                        color: #333333;
                    }
                }
            }
        }
    }
}
</style>
<script>
export default {
  data () {
    return {

    }
  },
  onShow () {
    wx.setNavigationBarTitle({
      title: '个人中心'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff', // 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 (微信小程序官方规定)
      backgroundColor: '#48B152'// 背景颜色值，有效值为十六进制颜色
    })
    this.userList()
  },
  methods: {

    userList: function () {
      // this.$http.get('/api/material/list', {type: this.typeID}).then((res) => { // 详情

      // }).catch(function (err) {
      //   console.log(err)
      // })
    },
    IndaddressHref: function () { // 收货地址
      wx.navigateTo({
        url: '/pages/index/Indaddress'
      })
    },
    tongxuenl: function () {
      wx.addPhoneContact({
        success: function (e) {
          console.log(e)
        }
      })
    },
    calling: function () {
      wx.makePhoneCall({
        phoneNumber: '15832886097',
        success: function () {
          console.log('拨打电话成功！')
        },
        fail: function () {
          console.log('拨打电话失败！')
        }
      })
    }
  }
}
</script>


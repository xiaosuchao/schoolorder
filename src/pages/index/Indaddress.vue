<template>
    <div class="address">
        <div class="top">
            <ul>
                <li>
                    <div class="left">
                        <span>学校名称:</span>
                    </div>
                    <div class="right">
                        <input type="text" placeholder="请输入学校名称" disabled="disabled">
                    </div>
                </li>
                <li>
                    <div class="left">
                        <span>收货地址:</span>
                    </div>
                    <div class="right">
                        <input type="text" placeholder="请输入收货地址" disabled="disabled">
                    </div>
                </li>
                <li>
                    <div class="left">
                        <span>收货人:</span>
                    </div>
                    <div class="right">
                        <input type="text" placeholder="请输入收货人姓名" disabled="disabled">
                    </div>
                </li>
                <li>
                    <div class="left">
                        <span>联系电话:</span>
                    </div>
                    <div class="right">
                        <input type="text" placeholder="请输入联系电话" disabled="disabled">
                    </div>
                </li>
            </ul>
        </div>
        <div class="submet" v-show="false">
            提交
        </div>
    </div>
</template>
<style lang="scss" scoped>
.address{
    .top{
        padding-top: 30rpx;
        margin-bottom: 180rpx;
        ul{
            li{
                display: flex;
                padding:15rpx 30rpx;
                font-size: 28rpx;
                border-bottom: 1px solid #F4F4F4;
                .left{
                    width: 25%;
                    padding-top: 8rpx;
                    box-sizing: border-box;
                }
                .right{
                    width: 75%;
                    input{
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    .submet{
        width: 80%;
        margin: 0 auto;
        text-align: center;
        background: #47B34F;
        color: #ffffff;
        font-size: 28rpx;
        padding: 20rpx;
        box-sizing: border-box;
        border-radius: 50rpx;
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
      title: '收货地址'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff', // 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 (微信小程序官方规定)
      backgroundColor: '#48B152'// 背景颜色值，有效值为十六进制颜色
    })
  },
  methods: {

  }
}
</script>

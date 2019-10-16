<template>
    <div class="index">
        <scroll-view class="scroll" scroll-y="true" style="white-space: nowrap;width: 100%;display: flex;" @scrolltolower="scrolltolower">
        <div class="advertising" @click="ShutDown" v-show="ShutDownSyle">
            今天是周三,您需要下达下周的订单哦！
        </div>
       <div class="header" @click="IndaddressHref">
           <img class="addressIMG" src="../../../static/images/dizhi.png"><p>金融街啊实打实大大声大声讲废话就死定了复活甲方那边会尽快了法国</p>
       </div>
       <div class="nav">
           <ul>
               <li v-for="item in datalistNav" :key="item.id" v-if="item.isHome==1" @click="ingredients(item.id)">
                   <div style="background:#7BDD25;">
                       <img src="../../../static/images/shucai.png" v-if="item.icon==null">
                       <img :src="item.icon" v-else>
                  </div>
                   {{item.name}}
               </li>
           </ul>
       </div>
       <div class="shuffling">
            <swiper class="swiper" :circular="circular" :autoplay="autoPlay" :indicator-color="indicatorColor" :indicator-dots="indicatorDots">
                <block v-for="(item, index) in BannerList" :key="index" >
                    <swiper-item >
                        <img class="swiperimg" :src="item.src">
                    </swiper-item>
                </block>
            </swiper> 
       </div>
       <div class="recommended">
           <div class="recommendedHeader">
                <img src="../../../static/images/u74.png">
                <span>为你推荐</span>
                <img src="../../../static/images/u74.png">
           </div>
               <ul class="tuijianlist">
                   <li v-for="item in GoodsDataList" :key="item.id">
                       <div class="left">
                           <img src="http://img.aicai58.cn/lunbo1.png" v-if="item.icon==null">
                           <img src="http://img.aicai58.cn/lunbo1.png" v-else>
                       </div>
                       <div class="right">
                           <p class="title">{{item.name}}</p>
                           <p class="order">规格:{{item.unit}}  </p>
                           <div class="shopping">
                               <div class="shoppingL">
                                   <p class="money">￥ {{item.price}}</p>
                               </div>
                               <div class="shoppingR">
                                   <span class="gouwu">+</span>
                               </div>
                           </div>
                           
                       </div>
                   </li>
               </ul>   
       </div>
       </scroll-view>
    </div>
</template>
<style lang="scss" scoped>
.index{
    .advertising{
        width: 100%;
        text-align: center;
        padding: 10rpx;
        box-sizing: border-box;
        background: #FFFF99;
        font-size: 28rpx;
    }
    .header{
        background: #48B152;
        display: flex;
        padding-top: 20rpx;
        padding-bottom: 20rpx;
        padding-left: 15rpx;
        p{
            width: 60%;
            font-size: 28rpx;
            margin: 0 10rpx;
            white-space:nowrap; 
            text-overflow:ellipsis; 
            overflow:hidden;
        }
        .addressIMG{
            width: 40rpx;
            height: 40rpx;
            vertical-align: middle;
        }
        .xiabiao{
            width: 18rpx;
            height: 5px;
            vertical-align: middle;
            margin-top: 15rpx;
        }
    }
    .nav{
        width: 80%;
        margin: 0 auto;
        padding-top: 30rpx;
        ul{
            padding: 20rpx;
            overflow: hidden;
            li{
                width: 25%;
                font-size: 24rpx;
                text-align: center;
                float: left;
                margin-bottom: 25rpx;
                div{
                    margin: 0 auto;
                    width:39rpx;
                    height: 39rpx;
                    padding: 20rpx;
                    background: #48B152;
                    border-radius: 50%;
                    margin-bottom: 18rpx;
                     img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
               
            }
        }
    }
    .shuffling{
        width: 100%;
      .swiper{
          width: 100%;
          height: 300rpx;
          img{
              width: 100%;
              height: 100%;
          }
      }  
    }
    .recommended{
        padding: 20rpx;
        margin-top: 40rpx;
        .recommendedHeader{
           text-align: center;
           width: 70%;
           margin: 0 auto;
           padding-left: 22%;
           display: flex;
           margin-bottom: 60rpx;
            img{
                height: 2px;
                vertical-align: middle;
                width: 20%;
                margin-top: 17rpx;
            }
            span{
                font-size: 24rpx;
                margin: 0 25rpx;
            }
        }
        .tuijianlist{
            li{
                display: flex;
                padding-bottom: 20rpx;
                border-bottom:1px solid #F2F2F2;
                .left{
                    width: 30%;
                    padding-right: 15rpx;
                    box-sizing: border-box;
                    img{
                        width: 100%;
                        height: 150rpx;
                    }
                }
                .right{
                    width: 70%;
                    .title{
                        font-size: 28rpx;
                        margin-bottom: 15rpx;
                    }
                    .order{
                        font-size: 24rpx;
                        margin-bottom: 15rpx;
                    }
                    .shopping{
                        display: flex;
                        margin-bottom: 15rpx;
                        .shoppingL{
                            width: 70%;
                            .money{
                                font-size: 24rpx;
                                color: #CC0000;
                            }
                        }
                        .shoppingR{
                            width: 30%;
                            text-align: right;
                            .gouwu{
                                color: #48B152;
                                font-size: 24rpx;
                                font-weight: bold;
                                padding: 5rpx 10rpx;
                                border: 1px solid #F2F2F2;
                                border-radius: 50%;
                            }
                        }
                        
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
      ShutDownSyle: false,
      circular: true,
      indicatorDots: true,
      indicatorColor: '#fff',
      autoPlay: true, // 以上是轮播,
      datalistNav: [],
      BannerList: [],
      GoodsDataList: [],
      schoolId: '',
      schoolDetailList: []
    }
  },
  onShow () {
    setTimeout(() => {
      this.ShutDownSyle = true
    }, 1000)
    wx.setNavigationBarTitle({
      title: '学校配送'
    })
    this.navlist()
    this.mydetail()
    this.GoodsList()
    this.shufflingBanner()
  },
  methods: {/// api/file/banners
    mydetail: function () { // 用户接口
      this.$http.get('/api/user/detail').then((res) => { // 详情
        this.schoolId = res.data.schoolId
        this.schoolDetail()
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    }, /// api/school/detail/ 学校接口ID
    schoolDetail: function () {
      this.$http.get('/api/school/detail/' + this.schoolId).then((res) => { // 详情
        this.schoolDetailList = res.data
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    },
    shufflingBanner: function () {
      this.$http.get('/api/file/banners').then((res) => { // 详情
        this.BannerList = res.data
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    },
    /// api/material/recommand为你推荐
    GoodsList: function () {
      this.$http.get('/api/material/recommand').then((res) => { // 详情
        this.GoodsDataList = res.data
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    },
    IndaddressHref: function () { // 收货地址
      wx.navigateTo({
        url: '/pages/index/Indaddress'
      })
    },
    scrolltolower: function () { // 分页

    },
    ingredients: function (id) { // 跳转分类
      console.log('分类' + id)
      wx.switchTab({// 分类
        url: '/pages/classification/classification',
        success: function () {
          getApp().globalData.classID = id
        }
      })
    },
    navlist: function () { // 导航列表
      this.$http.get('/api/cate/list', {type: 'MATERIAL'}).then((res) => { // 详情
        this.datalistNav = res.data
        console.log(this.datalistNav)
      }).catch(function (err) {
        console.log(err)
      })
    },
    ShutDown: function () { // 广告头
      this.ShutDownSyle = false
    }
  }
}
</script>

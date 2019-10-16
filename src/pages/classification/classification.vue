<template>
    <div class="classification">
        <div class="nav">
            <ul>
                <li @click="navStyleClick(0)" :class="{active:NavStyle==0}">
                    早餐
                </li>
                <li @click="navStyleClick(1)" :class="{active:NavStyle==1}">
                    中餐
                </li>
                <li @click="navStyleClick(2)" :class="{active:NavStyle==2}">
                    晚餐
                </li>
            </ul>
        </div>
        <div class="order">
            <div class="orderLeft">
                已下单：(周一)
            </div>
            <div class="orderRight" @click="orderRight">
                {{week}}
            </div>
        </div>
        <div class="dataList">
            <div class="dataList_left">
                <scroll-view class="scroll" scroll-y="true" style="white-space: nowrap;width: 100%;display: flex;height:920rpx;" @scrolltolower="scrolltolowerNav">
                    <ul>
                        <li v-for="item in datalistNav" :class="{activeBgcol:typeID==item.id}" @click="SelectIngredients(item.id)" :key="item.id">{{item.name}}</li>
                    </ul>
                </scroll-view>
            </div>
            <div class="dataList_right">
                <scroll-view class="scroll" scroll-y="true" style="white-space: nowrap;width: 100%;display: flex;height:800rpx;" @scrolltolower="scrolltolowerDatalist">
                    <ul>
                        <li v-for="item in ingredientsList" :key="item.id" >
                            <div class="left">
                                <img src="../../../static/images/p1.png" v-if="item.icon==unll">
                                <img v-else :src="item.icon">
                            </div>
                            <div class="right">
                                <p class="title">{{item.name}}</p>
                                <p class="orderzzz" v-show="false">月订单48件</p>
                                <div class="joinShop">
                                    <div class="joinShop_l">
                                        <p class="pice">￥ {{item.price}} <span style="color:black;">{{item.unit}}</span></p>
                                    </div>
                                    <div class="joinShop_r">
                                        <div class="jian" @click="jian(item)">
                                            -
                                        </div>
                                        <div class="input">
                                            {{item.usNum}}
                                        </div>
                                        <div class="jia" @click="jia(item)">
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </scroll-view>
            </div>
        </div>
        <div class="OrderJoin">
            <div class="left">
                <div class="img" :class="{gouwucheactive:ids.length>0}" @click="TheOrder">
                    <img src="../../../static/images/u107.png" >
                    <div class="xiaoer" v-if="ids.length>0">{{numerical}}</div>
                </div>
                <div class="jianqian" v-if="ids.length>0">
                    ￥{{totalPrice}}
                </div>
            </div>
            <div class="right">
                <div class="buttom" :class="{gouwucheactive:ids.length>0}" @click="orderClick">
                    加入订单
                </div>
            </div>
        </div>
        <div class="thickness" v-show="orderRightStyle" @click="orderRight">
            <div class="thicknessDatalist">
                <ul>
                    <li v-for="item in datalist" :key="item.week" > 
                        <div class="left" @click="weekClick(item.week,item.id)" :class="{zhengzhouClic:week==item.week}">
                            {{item.week}}
                        </div>
                        <div class="right">
                            <img src="../../../static/images/u112.png" v-if="item.week==week">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="TheOrder" v-show="TheOrderStyle" @click="TheOrder">
            <div class="TheOrderst" @click.stop>
                <div class="top">
                    <div class="topleft">
                        <!-- <img src="../../../static/images/checkbox-active.png" v-show="false">
                        <img src="../../../static/images/checkbox.png">全选(已选5件,共2kg) -->
                    </div>
                    <div class="topright" @click="clearOrder">
                        <span>清空订单</span>
                    </div>
                </div>
                <div class="orderdatalist" >
                    <scroll-view class="scroll" scroll-y="true" style="white-space: nowrap;width: 100%;display: flex;height:750rpx;" @scrolltolower="scrolltolowerDatalist">
                        <ul>
                            <li v-for="item in ids" :key="item.id">
                                <!-- <div class="xuanze">
                                    <img src="../../../static/images/checkbox-active.png" v-show="false">
                                    <img src="../../../static/images/checkbox.png">
                                </div> -->
                                <div class="left">
                                    <img src="../../../static/images/p1.png" v-if="item.icon==unll">
                                     <img v-else :src="item.icon">
                                </div>
                                <div class="right">
                                    <p class="title">{{item.name}}</p>
                                    <p class="orderzzz">单价</p>
                                    <div class="joinShop">
                                        <div class="joinShop_l">
                                            <p class="pice">￥ {{item.price}}</p>
                                        </div>
                                        <div class="joinShop_r">
                                            <div class="jian" @click="jiangouwu(item)">
                                                -
                                            </div>
                                            <div class="input">
                                               {{item.usNum}}
                                            </div>
                                            <div class="jia" @click="jiagouwu(item)">
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </scroll-view>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.classification{
    .activeBgcol{
        background: #ffffff !important;
    }
    .active{
        color: #48B152;
        border-bottom: 6rpx solid #48B152 !important;
    }
    .nav{
        ul{
            display: flex;
            li{
                text-align: center;
                font-size: 28rpx;
                width: 33%;
                padding: 25rpx 0;
                border-bottom: 6rpx solid #ffffff;
            }
        }
    }
    .order{
        background:#F2F2F2; 
        display: flex;
        padding: 20rpx 25rpx;
        font-size: 24rpx;
        color: #999999;
        .orderLeft{
            width: 50%;
        }
        .orderRight{
            width: 50%;
            text-align: right;
        }
    }
    .dataList{
        display: flex;
        .dataList_left{
            background:#F2F2F2; 
            width: 25%;
            font-size: 28rpx;
            text-align: center;
            // padding: 20rpx;
            box-sizing: border-box;
            li{
                padding: 20rpx;
            }
        }
        .dataList_right{
            width: 75%;
            ul{
                li{
                    display: flex;
                    border-bottom: 1px solid #E4E4E4;
                    padding: 20rpx;
                    .left{
                        width: 30%;
                        img{
                            width: 100%;
                            height: 150rpx;
                        }
                    }
                    .right{
                        width: 70%;
                        font-size: 28rpx;
                        padding: 0 25rpx;
                        box-sizing: border-box;
                        .title{
                            font-size: 24rpx;
                            font-weight: bold;
                            margin-bottom: 15rpx;
                        }
                        .orderzzz{
                            font-size: 24rpx;
                            color: #999999;
                            margin-bottom: 15rpx;
                        }
                        .joinShop{
                            display: flex;
                            .joinShop_l{
                                color: red;
                                width: 50%;
                                padding-top: 10rpx;
                            }
                            .joinShop_r{
                                width: 50%;
                                display: flex;
                                div{
                                    padding: 10rpx;
                                }
                                .jian,.jia{
                                    color: #48B152;
                                    font-weight: bold;
                                }
                                .input{
                                    border: 1px solid #E4E4E4;
                                    margin: 0 10rpx;
                                    width: 150rpx;
                                    text-align: center;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .OrderJoin{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        background: #ffffff;
        .left{
            width: 70%;
            padding-left: 30rpx;
            padding-bottom: 5rpx;
            display: flex;
            .jianqian{
                color: red;
                padding-top: 25rpx;
                box-sizing: border-box;
                padding-left: 15rpx;
            }
            .img{
                position: relative;
                box-align: border-box;
                width: 80rpx;
                height:80rpx;
                padding:5px;
                text-align: center;
                border-radius: 50%;
                background: #BEBEBE;
                img{
                    width: 60rpx;
                    height: 50rpx;
                    margin-top: 13rpx;
                }
            }
            .xiaoer{
                position: absolute;
                top: -18rpx;
                right: 3rpx;
                font-size: 28rpx;
                background: red;
                width: 40rpx;
                height: 40rpx;
                border-radius: 50%;

            }
        }
        .right{
            width: 30%;
            .buttom{
                font-size: 28rpx;
                width: 100%;
                padding-top: 27rpx;
                box-align: border-box;
                text-align: center;
                background: #BDBDBD;
                color: #ffffff;
                height: 100%;
            }
        }
    }
    .thickness{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        .thicknessDatalist{
            position: fixed;
            background: #ffffff;
            width: 80%;
            left: 10%;
            top: 15%;
            font-size: 28rpx;
            ul{
                li{
                    padding: 30rpx 35rpx; 
                    display: flex;
                    border: 1px solid #F2F2F2;
                    .left{
                        width: 90%;
                    }
                    .right{
                        width: 10%;
                        img{
                            width: 46rpx;
                            height: 23rpx;
                        }
                    }
                }
            }
        }
        .zhengzhouClic{
            color: #28B6A6;
        }
    }
    .gouwucheactive{
        background: #47B34E !important;
    }
    .TheOrder{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        .TheOrderst{
            width: 90%;
            background: #ffffff;
            position: fixed;
            border-radius: 15rpx;
            top: 15%;
            left: 5%;
            .top{
                font-size: 24rpx;
                padding: 15rpx;
                display: flex;
                .topleft{
                    width: 80%;
                    img{
                        width: 30rpx;
                        height: 30rpx;
                        margin-right: 15rpx;
                        margin-left: 5rpx;
                        vertical-align: middle;
                    }
                }
                .topright{
                    width: 20%;
                }
            }
        }
        .orderdatalist{
             ul{
                li{
                    display: flex;
                    border-bottom: 1px solid #E4E4E4;
                    padding: 20rpx;
                    .xuanze{
                        padding-top: 45rpx;
                        box-align: box-align;
                        img{
                            width: 30rpx;
                            height: 30rpx;
                            padding-right: 15rpx;
                            vertical-align: middle;
                        }
                    }
                    .left{
                        width: 30%;
                        img{
                            width: 100%;
                            height: 150rpx;
                        }
                    }
                    .right{
                        width: 70%;
                        font-size: 28rpx;
                        padding: 0 25rpx;
                        box-sizing: border-box;
                        .title{
                            font-size: 24rpx;
                            font-weight: bold;
                            margin-bottom: 15rpx;
                        }
                        .orderzzz{
                            font-size: 24rpx;
                            color: #999999;
                            margin-bottom: 15rpx;
                        }
                        .joinShop{
                            display: flex;
                            .joinShop_l{
                                color: red;
                                width: 50%;
                                padding-top: 10rpx;
                            }
                            .joinShop_r{
                                width: 50%;
                                display: flex;
                                div{
                                    padding: 10rpx;
                                }
                                .jian,.jia{
                                    color: #48B152;
                                    font-weight: bold;
                                }
                                .input{
                                    border: 1px solid #E4E4E4;
                                    margin: 0 10rpx;
                                    width: 150rpx;
                                    text-align: center;
                                }
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
      NavStyle: 0,
      datalist: [
        {'week': '整周', 'id': '0'},
        {'week': '周一', 'id': '1'},
        {'week': '周二', 'id': '2'},
        {'week': '周三', 'id': '3'},
        {'week': '周四', 'id': '4'},
        {'week': '周五', 'id': '5'}
      ],
      week: '整周',
      weekID: 0,
      orderRightStyle: false,
      numerical: 0,
      TheOrderStyle: false,
      typeID: '',
      ingredientsList: [],
      datalistNav: [],
      typeIDType: 0,
      ids: [],
      totalPrice: 0,
      orderData: [],
      mealType: 'BREAKFAST',
      schoolId: 0
    }
  },
  onLoad: function (options) { // 页面获取
    console.log('........................')
    var un = undefined
    var classID = getApp().globalData.classID
    if (classID == un) {
      this.typeIDType = 0
    } else {
      this.typeID = classID
      this.typeIDType = 1
    }
    console.log(classID)
    console.log('........................')
  },
  onShow () {
    wx.setNavigationBarTitle({
      title: '食品分类'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff', // 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 (微信小程序官方规定)
      backgroundColor: '#48B152'// 背景颜色值，有效值为十六进制颜色
    })
    this.navlist()
    this.mydetail()
    this.ingredients()
  },
  methods: {/// api/user/detail/{cid}
    mydetail: function () { // 用户接口
      this.$http.get('/api/user/detail').then((res) => { // 详情
        this.schoolId = res.data.schoolId
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    },
    clearOrder: function () { // 清空订单
      var vm = this
      wx.showModal({
        title: '提示',
        content: '确定要清空购物车吗？',
        success: function (sm) {
          if (sm.confirm) {
            // 用户点击了确定 可以调用删除方法了
            for (let index = 0; index < vm.ingredientsList.length; index++) {
              vm.ingredientsList[index].usNum = 0
            }
            vm.ids = []
            vm.TheOrderStyle = false
          } else if (sm.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    orderClick: function () { // 订单提交
      if (this.ids.length > 0) {
        var d = new Date()
        var str = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        console.log(this.ids)
        var idsDataList = []
        for (let index = 0; index < this.ids.length; index++) {
          idsDataList.push({'price': this.ids[index].price, 'unit': this.ids[index].unit, 'amount': this.ids[index].usNum, 'materialId': this.ids[index].id})
        }
        for (let index = 0; index < this.ids.length; index++) {
          idsDataList.price = this.ids[index].price
        }
        console.log(idsDataList)
        this.orderData.day = str
        this.orderData.schoolId = this.schoolId
        this.orderData.weekday = this.weekID
        this.orderData.mealType = this.mealType
        this.orderData.orderDetails = JSON.stringify(idsDataList)
        this.$http.post('/api/order/create', this.orderData).then((res) => { // 详情

        }).catch(function (err) {
          console.log(err)
        })
      } else {
        wx.showToast({title: '购物车不能为空'})
      }
    },
    ingredients: function () { // 食材列表
      this.$http.get('/api/material/list', {type: this.typeID}).then((res) => { // 详情
        var datalist = res.data
        for (let index = 0; index < datalist.length; index++) {
          datalist[index].usNum = 0
        }
        this.ingredientsList = datalist
        console.log(this.ingredientsList)
        console.log(this.datalistNav)
      }).catch(function (err) {
        console.log(err)
      })
    },
    navlist: function () { // 导航列表
      this.$http.get('/api/cate/list', {type: 'MATERIAL'}).then((res) => { // 详情
        this.datalistNav = res.data
        if (this.typeIDType == 0) {
          this.typeID = res.data[0].id
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    SelectIngredients: function (id) { // 点击左边食材导航
      this.typeID = id
      this.ingredients()
    },
    TheOrder: function () { // 订单
      if (this.ids.length > 0) {
        this.TheOrderStyle = !this.TheOrderStyle
      } else {

      }
    },
    orderRight: function () { // 下单
      this.orderRightStyle = !this.orderRightStyle
    },
    weekClick: function (style, id) { // 选择
      this.week = style
      this.weekID = id
    },
    navStyleClick: function (style) { // 导航
      this.NavStyle = style
      if (style == 0) {
        this.mealType = 'BREAKFAST'
      } else if (style == 1) {
        this.mealType = 'LUNCH'
      } else if (style == 2) {
        this.mealType = 'DINNER'
      }
    },
    jian: function (item) { // 减
      item.usNum--
      if (item.usNum > 0) {
        this.ids.push(item)
        for (var i = 0; i < this.ids.length; i++) {
          for (var j = i + 1; j < this.ids.length;) {
            if (this.ids[i].id === this.ids[j].id) { // 判断条件可以按照个人需求改
              this.ids.splice(j, 1)
              for (let indexids = 0; indexids < this.ids.length; indexids++) {
                if (this.ids[indexids].usNum == 0) {
                  this.ids.splice(indexids, 1)
                }
              }
            //   this.ids.splice(i, 1)
            } else {
              j++
            }
          }
        }
      }
      if (item.usNum == 0) {
        console.log(item.usNum)
        for (let indexids = 0; indexids < this.ids.length; indexids++) {
          if (this.ids[indexids].usNum == 0) {
            this.ids.splice(indexids, 1)
          }
        }
      }
      var usNum1 = 0
      for (let index = 0; index < this.ids.length; index++) {
        usNum1 = usNum1 + this.ids[index].usNum
      }
      this.numerical = usNum1
      console.log(usNum1)
      if (item.usNum < 0) {
        item.usNum++
      }
      console.log(this.ids)
    },
    jia: function (item) { // 加
      item.usNum++
      if (item.usNum > 0) {
        this.ids.push(item)
        for (var i = 0; i < this.ids.length; i++) {
          for (var j = i + 1; j < this.ids.length;) {
            if (this.ids[i].id === this.ids[j].id) { // 判断条件可以按照个人需求改
              this.ids.splice(j, 1)
              for (let indexids = 0; indexids < this.ids.length; indexids++) {
                if (this.ids[indexids].usNum == 1000000) {
                  this.ids.splice(indexids, 1)
                }
              }
            } else {
              j++
            }
          }
        }
        console.log(this.ids)
        var usNum1 = 0
        for (let index = 0; index < this.ids.length; index++) {
          usNum1 = usNum1 + this.ids[index].usNum
        }
        this.numerical = usNum1
        console.log(usNum1)
      }
      if (item.usNum > 1000000) {
        item.usNum--
      }
      var TalPrice = 0
      for (let index = 0; index < this.ids.length; index++) {
        this.ids[index].zongjia = this.ids[index].price * this.ids[index].usNum
        TalPrice += this.ids[index].zongjia
        // this.totalPrice = this.totalPrice + this.ids[index].zongjia
      }
      this.totalPrice = TalPrice.toFixed(2) // Math.round(TalPrice * 100) / 100
    },
    scrolltolowerNav: function () { // scrolltolowerNav左边导航

    },
    scrolltolowerDatalist: function () { // 右边导航

    },
    jiangouwu: function (item) { // 减购物
      item.usNum--
      if (this.ids) {

      }
      if (item.usNum == 0) {
        for (let index = 0; index < this.ids.length; index++) {
          if (item.id == this.ids[index].id) {
            this.ids.splice(index, 1)
          }
        }
      }
      if (item.usNum < 0) {
        item.usNum++
      }
      var TalPrice = 0
      for (let index = 0; index < this.ids.length; index++) {
        this.ids[index].zongjia = this.ids[index].price * this.ids[index].usNum
        TalPrice += this.ids[index].zongjia
      }
      this.totalPrice = TalPrice.toFixed(2) // Math.round(TalPrice * 100) / 100
    },
    jiagouwu: function (item) { // 加购物
      item.usNum++
    }
  }
}
</script>
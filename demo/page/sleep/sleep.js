var postData = require("../data/post-data.js");
Page({
  data: {
    postList: postData.postList,   //所有的数据列表
    postItem: postData.postList[0],  //默认只显示第一条数据
    currentIndex: 1,       //当前页面的第一条数据
    index: 0,             //内容里面的默认当前第一个作为标识
    selectBg: '#7db876',   //选中框的背景颜色
    selectText: '#fff',    //选中框的文字颜色
    defaultBg: '#fff',     //默认框的背景颜色
    defaultText: "#7db876", //默认的文字颜色
    defaultBd: "#7db876",   //默认的边框颜色
    isSelect: false,        //判断是否是选中状态
    selectArr: [],          //选中后要放入框中的数据，默认是空数组     
    width: 0,               //默认进度条的宽是0
    hidden: true,           //是否隐藏
    userInfo: {},           //用户信息存放
    selectCon: "",          //临时用来存放框中数据
    id: 100000,
    defaultValue:"没有或不知道",
    textValue:"下一题"
  },
  onLoad: function () {
    this.getUserInfo();
    this.getProgress();
    console.log(this.data.postList[0])
  },
  // 获取进度条 
  getProgress: function () {
    var width = 442 / this.data.postList.length * this.data.currentIndex;
    this.setData({
      width: width,
    })
  },
  // 获取用户信息
  getUserInfo: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo,
        })
      }
    })
  },
  // 选择点击按钮
  selectBtn: function (e) {
    var id = e.currentTarget.dataset.item;
    var selectCon = this.data.postItem.content[id];
    this.setData({
      id: id,
      selectCon: selectCon,
    })
    var that = this;
    setTimeout(function () {
      that.setData({
        hidden: false,
      })
    }, 200)
    // 获取高
    setTimeout(function () {
      that.nextText();
    }, 1500)
  },
  nextText: function () {
    var currId = this.data.currentIndex;
    var length = this.data.postList.length;
    if (currId >= length) {
      this.alertTit("答题结束")
      return;
    }
    this.setData({
      postItem: postData.postList[this.data.currentIndex],
      currentIndex: this.data.currentIndex + 1,
      hidden: true,
      index: 0,
      id: 10000,
    })
    this.getProgress();
  },
  alertTit: function (title) {
    wx.showToast({
      title: title,
    })
  },
  goTop: function (e) {  // 一键回到顶部
    wx.createSelectorQuery().select('#drawId').boundingClientRect(function (rect) {
      var maxScroll = rect.top;
    }).exec();
    console.log(e);
    if (wx.pageScrollTo) {
      console.log(e);
      wx.pageScrollTo({
        scrollTop: e * 50,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
})
var postData = require("../data/post-data.js");

const date = new Date()
const years = []
const months = []
const days = []
const hours = []
const minutes = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}
for (let i = 1; i <= 31; i++) {
  days.push(i)
}
for (let i = 0; i <= 23; i++) {
  hours.push(i)
}
for (let i = 0; i <= 59; i++) {
  minutes.push(i)
}
Page({
  // state   1:单选  2:多选  3:填空  4:日期  5:年月日   6:数量
  data: {
    postList: postData.postList,   //所有的数据列表
    postItem: postData.postList[0],  //默认只显示第一条数据
    dataArray: [],          //向后台提交数据时的总数据
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
    defaultValue: "没有或不知道...",
    textValue: "下一题",
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    hours: hours,
    hour: "23",
    minutes: minutes,
    minute: "1",
    value: [9999, 1, 1],
    nums: [],
    num: 0,
    dw: "",
    ch: 0,
  },
  onLoad: function () {
    this.getUserInfo();
    this.getProgress();
    this.state();
  },
  // 获取数量
  getNum: function () {
    var min = this.data.postItem.min;
    var max = this.data.postItem.max;
    var ch = this.data.postItem.ch;
    var dw = this.data.postItem.dw;
    var nums = [];
    for (var i = min; i <= max; i = i + ch) {
      console.log(i)
      nums.push(i)
    }
    this.setData({
      nums: nums,
      ch: ch,
      dw: dw,
      num:nums[0]
    })
    console.log(nums)
  },
  //判断状态
  state:function(){
    var state = this.data.postItem.state;
    if (state == 6) {
      console.log(111)
      this.getNum();
    }
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
  // 获取年月  时分  数量
  bindChange: function (e) {
    var state = this.data.postItem.state;
    const val = e.detail.value;
    if (state == 4) {
      this.setData({
        hour: val[0],
        minute: val[1],
      })
    } else if (state == 5) {
      this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]],
      })
    } else if(state==6) {
      this.setData({
        num:this.data.nums[val[0]],
      })
    }
  },
  // 获取多选框里携带的值 
  checkboxChange: function (e) {
    var selectArr = e.detail.value;
    if (selectArr != "") {
      this.setData({
        defaultValue: '选好了，下一题',
        selectArr: selectArr,
      })
    } else {
      this.setData({
        defaultValue: '没有或不知道...',
      })
    }

  },
  // 获取textarea的内容
  areaChange: function (e) {
    var selectCon = e.detail.value;
    if (selectCon != "") {
      this.setData({
        selectCon: selectCon,
      })
    }
    console.log(this.data.selectCon)
  },
  // 选择点击按钮
  selectBtn: function (e) {
    var state = this.data.postItem.state;
    var nameId = e.currentTarget.dataset.id;
    var checkArray = [];
    if (state == 1) {
      var id = e.currentTarget.dataset.item;
      var selectCon = this.data.postItem.content[id];
      this.setData({
        id: id,
        selectCon: selectCon,
      })
      var checkCon = e.currentTarget.dataset.con;
      var conArr = [];
      conArr.push(checkCon)
      checkArray = [{ nameId: nameId, checkCon: conArr }];
      this.data.dataArray.push(checkArray);
      console.log(this.data.dataArray)
    }
    else if (state == 2) {
      if (this.data.selectArr != 0) {
        this.setData({
          selectArr: this.data.selectArr,
          isSelect: true,
        })
      } else {
        this.setData({
          selectArr: ["没有或不知道"]
        })
      }
      var selectArr = this.data.selectArr;
      checkArray = [{ nameId: nameId, checkCon: selectArr }];
      this.data.dataArray.push(checkArray)
      console.log(this.data.dataArray)
    }
    else if (state == 3) {
      console.log(this.data.selectCon)
      if (this.data.selectCon != "") {
        this.setData({
          selectCon: this.data.selectCon,
          isSelect: true,
        })
      } else {
        this.setData({
          selectCon: "补充完整情况，结果越准确哦"
        })
      }
      var selectCon = this.data.selectCon;
      checkArray = [{ nameId: nameId, checkCon: [selectCon]}];
      this.data.dataArray.push(checkArray)
      console.log(this.data.dataArray)
    } 
    else if(state==4){
      this.setData({
        isSelect: true,
      })
      var selectArr = this.data.hour + '时' + this.data.minute+'分';
      checkArray = [{ nameId: nameId, checkCon: [selectArr]}];
      this.data.dataArray.push(checkArray)
      console.log(this.data.dataArray)
    }
    else if(state==5){
      this.setData({
        isSelect: true,
      })
      var selectArr = this.data.year + '年' + this.data.month + '月'+this.data.day+'日';
      checkArray = [{ nameId: nameId, checkCon: [selectArr] }];
      this.data.dataArray.push(checkArray)
      console.log(this.data.dataArray)
    }
    else if(state==6){
      this.setData({
        isSelect: true,
      })
      var selectArr = this.data.num + this.data.dw;
      checkArray = [{ nameId: nameId, checkCon: [selectArr] }];
      this.data.dataArray.push(checkArray)
      console.log(this.data.dataArray)
    }
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
      selectArr:[],
      hidden: true,
      selectCon:'',
      index: 0,
      id: 10000,
    })
    this.state();
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
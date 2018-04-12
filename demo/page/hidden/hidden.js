Page({

  data: {
    list: [
      { 'id': 0, 'hidden': true },
      { 'id': 1, 'hidden': true },
      { 'id': 2, 'hidden': true },
    ],
    listCon: [
      { 'id': 0, 'hidden': true },
      { 'id': 1, 'hidden': true },
      { 'id': 2, 'hidden': true },
    ]
  },
  // 方法一
  hiddenBtn: function (e) {
    var that = this;
    // 获取事件绑定的当前组件
    var index = e.currentTarget.dataset.index;
    // 获取list中hidden的值
    // 隐藏或显示内容
    that.data.list[index].hidden = !that.data.list[index].hidden;
    that.setData({
      list: that.data.list
    })
  },
  // 方法二
  hiddenBtnCon: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.data.listCon[index].hidden = !that.data.listCon[index].hidden;
    that.setData({
      listCon: that.data.listCon
    })
  },


})
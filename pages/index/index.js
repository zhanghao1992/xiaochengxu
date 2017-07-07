//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        list: null
    },
    onLoad: function () {
        var _this = this;
        wx.request({
            url: 'https://api.douban.com/v2/movie/in_theaters',
            data: {},
            header: {
                'content-type': 'json'
            },
            success: function (res) {
                console.log(res.data)

                _this.setData({
                    list: res.data
                })
            }
        })
    }
})

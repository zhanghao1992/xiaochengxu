var app = getApp()
Page({
    data: {
        list: null
    },
    onLoad: function () {
        var _this = this;
        wx.showLoading({
            title: '加载中',
        });
        wx.request({
            url: 'https://api.douban.com/v2/movie/coming_soon',
            data: {},
            header: {
                'content-type': 'json'
            },
            success: function (res) {
                console.log(res)
                wx.hideLoading();
                _this.setData({
                    list: res.data
                })
            }
        })
    }
})

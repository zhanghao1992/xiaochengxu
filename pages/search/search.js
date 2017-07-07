// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        val: null,
        list: null
    },
    inputHandle: function (ev) {
        console.log(ev)
        this.setData({
            val: ev.detail.value
        })
    },
    searchHandle: function () {
        var _this = this;
        wx.request({
            url: 'https://api.douban.com/v2/movie/search',
            data: {
                q: _this.data.val
            },
            header: {
                'content-type': 'json'
            },
            success: function (res) {
                console.log(res)
                if (res.data.subjects.length === 0) {
                    wx.showToast({
                        title: '未找到数据！',
                        image:'../../image/error.png'
                    });
                } else {
                    _this.setData({
                        list: res.data
                    })
                }
            }
        })
    }
})
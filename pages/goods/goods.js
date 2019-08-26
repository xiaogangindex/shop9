// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
	gotolist(){
		wx.navigateTo({
			url: '/pages/good-list/good-list',
		})
	},
	data: {
		info: {
			type: 1,
			title: "分类",
			back: false,
			bg: "#fff"
		},
		activeIndex: 0,
		list: [
			{
				id: 18, cate_name: "配件设备", child: [
					{ id: 7, cate_name: "床垫", pic: "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9de8b7c5cc5.png" },
					{ id: 22, cate_name: "布艺软装", pic: "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9df1b8f0a7a.png" },
					{ id: 21, cate_name: "家饰花卉", pic: "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9df170010cb.png" },
					{ id: 20, cate_name: "床品件套", pic: "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9df11e13742.png" },
					{ id: 19, cate_name: "家具", pic: "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9def5fa968c.png" },
					{ id: 8, cate_name: "灯具", pic: "http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9def00c2882.png" }
				]
			},
			{ id: 17, cate_name: "出行交通", child: [] },
			{ id: 16, cate_name: "日杂用品", child: [] },
			{ id: 15, cate_name: "洗护健康", child: [] },
			{ id: 14, cate_name: "餐厨厨房", child: [] },
			{ id: 13, cate_name: "服饰鞋帽", child: [] },
			{ id: 12, cate_name: "影音音响", child: [] },
			{ id: 11, cate_name: "智能设备", child: [] },
			{ id: 10, cate_name: "手机数码", child: [] },
			{ id: 9, cate_name: "家电电器", child: [] },
			{ id: 1, cate_name: "热门推荐", child: [] },
			{ id: 6, cate_name: "居家生活", child: [] }
		],
		heiList: []
	},
	changeIndex(e) {
		this.setData({
			activeIndex: e.currentTarget.dataset.index,
			elId: "a" + e.currentTarget.dataset.index
		})
	},
	scroll(e) {
		let heiList = [];
		for (var i = 0; i < this.data.list.length; i++) {
			var query = wx.createSelectorQuery().in(this);
			var idView = "#a" + i;
			query.select(idView).boundingClientRect();
			query.exec((res) => {
				var top = res[0].top;
				heiList.push(top);
				this.setData({
					heiList
				})
			});
		}
		console.log(this.data.heiList)

		var scrollTop = e.detail.scrollTop;
		var scrollArr = this.data.heiList;
		for (var i = 0; i < scrollArr.length; i++) {
			if (scrollTop >= 0 && scrollTop < scrollArr[1] - scrollArr[0]) {
				this.setData({
					activeIndex: 0
				})
			} else if (scrollTop >= scrollArr[i] - scrollArr[0] && scrollTop < scrollArr[i + 1] - scrollArr[0]) {
				this.setData({
					activeIndex: i
				})
			} 
			// else if (scrollTop >= scrollArr[scrollArr.length - 1] - scrollArr[0]) {
			// 	this.setData({
			// 		activeIndex: scrollArr.length - 1
			// 	})
			// }
		}
	},
  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
		

	},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
	onReady: function () {

	},

  /**
   * 生命周期函数--监听页面显示
   */
	onShow: function () {

	},

  /**
   * 生命周期函数--监听页面隐藏
   */
	onHide: function () {

	},

  /**
   * 生命周期函数--监听页面卸载
   */
	onUnload: function () {

	},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
	onPullDownRefresh: function () {

	},

  /**
   * 页面上拉触底事件的处理函数
   */
	onReachBottom: function () {

	},

  /**
   * 用户点击右上角分享
   */
	onShareAppMessage: function () {

	}
})
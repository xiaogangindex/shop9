Component({
	properties: {
		info: {
			bg:"",
			type: Object,
			value: {
				type: 0
			}
		}
	},
	methods: {
		goback() {
			wx.navigateBack({

			})
		}
	}
})

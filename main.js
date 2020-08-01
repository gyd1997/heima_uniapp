import Vue from 'vue'
import App from './App'
import {request} from './util/api.js'

Vue.config.productionTip = false
Vue.prototype.$http = request
Vue.filter('formatDate', (date) => {
	const ndate = new Date(date)
	const year = ndate.getFullYear()
	const month = ndate.getMonth()+1
	const realMonth = month.toString().padStart(2, 0)
	const day = ndate.getDate().toString().padStart(2, 0)
	return `${year}-${realMonth}-${day}`
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

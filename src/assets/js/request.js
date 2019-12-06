import http from './http.js'
import api from './api.js'
// 请求方法
const methods = {
	add: (params) => {
		return http.post(api.firstUrl,params)
	},
	remove: (params) => {
		return http.get(api.secondUrl,params)
	},
}
export default methods
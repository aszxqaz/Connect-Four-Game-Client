import Axios from 'axios'
import { configs } from '../config'

const axios = Axios.create({
	baseURL: configs.httpBaseUrl,
	withCredentials: true,
})

export const authApi = {
	login(username: string) {
		return axios.post<{ user: { username: string } }>('/auth/login', {
			username,
		})
	},
	me() {
		return axios.get<{ user: { username: string } }>('/auth/me')
	},
}

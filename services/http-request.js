import axios from 'axios'

export default class HttpRequest {
	constructor() {
		this.endpoint = ''
	}

	static async get(id = null) {
		try {
			let response = null
			if (id) {
				response = await axios.get(`${process.env.API_URI}/${this.endpoint}/${id}`, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
			} else {
				response = await axios.get(`${process.env.API_URI}/${this.endpoint}`, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
			}

			return response.data
		} catch (err) {
			console.log(err.message)
			return err.response.data
		}
	}

	static async post(data) {
		try {
			const response = await axios.post(`${process.env.API_URI}/${this.endpoint}`, data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})

			return response.data
		} catch (err) {
			console.log(err.message)
			return err.response.data
		}
	}

	static async put(id, data) {
		try {
			const response = await axios.post(`${process.env.API_URI}/${this.endpoint}/${id}`, data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})

			return response.data
		} catch (err) {
			console.log(err.message)
			return err.response.data
		}
	}

	static async delete(id) {
		try {
			const response = await axios.post(`${process.env.API_URI}/${this.endpoint}/${id}`, {
				headers: {
					'Content-Type': 'application/json',
				},
			})

			return response.data
		} catch (err) {
			console.log(err.message)
			return err.response.data
		}
	}
}

import HttpRequest from './http-request'

export default class ExampleService {
  static async getAll() {
    HttpRequest.endpoint = 'example'
    const response = await HttpRequest.get()
    return response
  }
}

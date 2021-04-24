import HttpRequest from './http-request'

class ExampleService extends HttpRequest {
  async getAll() {
    this.setEndpoint('example')
    const response = await this.get()
    return response
  }
}

export default ExampleService

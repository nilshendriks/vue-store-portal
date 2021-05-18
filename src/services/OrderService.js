import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/nilshendriks/test-website',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getOrders() {
    return apiClient.get('/orders?_page=1&_limit=8&_sort=date&_order=asc')
  },
  //Added new call
  getOrder(id) {
    return apiClient.get('/orders/' + id)
  }
}
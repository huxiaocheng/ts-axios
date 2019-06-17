import axios, { AxiosError } from '../../src/index'

axios({
  method: 'get',
  url: '/error/get1'
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})

axios({
  method: 'get',
  url: '/error/get'
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log(e)
  })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout1',
  timeout: 2000
}).then((res) => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.log('message',e.message)
  console.log('config',e.config)
  console.log('code:',e.code)
  console.log('request', e.request)
  console.log('isAxiosError',e.isAxiosError)
})

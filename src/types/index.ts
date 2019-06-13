export type Method = 'get' | 'GET' | 'post' | 'POST'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}

import axios from 'axios'
import type {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios'
import {message, notification} from 'antd'

import CONFIG from '../config'
import type {IStore} from '../store'

interface RespData {
  success: boolean
  errorCode: number
  msg?: string
  data?: any

  [key: string]: any
}

let exiting = false

function handleError(error: AxiosError) {
  const response = error.response
  notification.error({
    message: `Error Code: ${response?.status ?? -1}`,
    description: response?.statusText ?? 'Internal Server'
  })
}

interface IAxiosInstance {
  get(url: string, config?: AxiosRequestConfig): Promise<Record<string, any>>

  delete(url: string, config?: AxiosRequestConfig): Promise<Record<string, any>>

  post(url: string, data?: any, config?: AxiosRequestConfig): Promise<Record<string, any>>

  put(url: string, data?: any, config?: AxiosRequestConfig): Promise<Record<string, any>>
}

const httpInstance: IAxiosInstance & AxiosInstance = axios.create({
  timeout: CONFIG.http.requestTimeout,
  baseURL: CONFIG.http.baseURL
})

httpInstance.defaults.headers.common.isLoading = 'true'
httpInstance.defaults.headers.common.errorAlert = 'true'
Object.setPrototypeOf(httpInstance, axios)


export function setupInterceptor(store: IStore) {
  httpInstance.interceptors.request.use((config) => {
    const method = config.method
    const userState = store.getState().user.userInfo

    if (userState.token) {
      if (config.headers) {
        config.headers.token = userState.token as string
      }
    }

    const data: Record<string, any> = {}

    if (method === 'post' || method === 'put') {
      if (config.data instanceof FormData) {
        for (let key in data) {
          config.data.append(key, data[key])
        }
      } else {
        config.data = Object.assign(data, config.data)
      }
    }

    return config
  }, (error) => {
    handleError(error)
    return Promise.reject(error)
  })


  httpInstance.interceptors.response.use((res) => {
    const headers = res.config.headers
    const data: RespData = res.data

    if (data.success && headers?.successAlert) {
      message.success(data.msg || 'Successful operation')
    }

    if (data.errorCode === 401 && !exiting) {
      exiting = true
      //  logout
    }

    if (!data.success) {
      if (headers?.errorAlert) {
        notification.error({
          message: `Error Code: ${data.errorCode ?? -1}`,
          description: data.msg ?? 'Internal Server'
        })
      }
      throw res
    }

    return res.data?.data || res
  }, (error) => {
    handleError(error)
    return Promise.reject(error)
  })
}


export default httpInstance;

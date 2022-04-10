import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {LOCAL_STORAGE} from '../constants'
import {serviceLoginByToken} from '../services'
import type {AppDispatch} from '.'

export interface UserInfoProps {
  username: string
  password: string
  token: string | undefined
}

export interface UserState {
  isLogin: boolean
  isLockScreen: boolean
  userInfo: UserInfoProps
}

const initialState: UserState = {
  isLogin: false,
  isLockScreen: false,
  userInfo: {
    username: '',
    password: '',
    token: undefined,
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_USER_INFO: (state: UserState, action: PayloadAction<UserInfoProps>) => {
      const userInfo = action.payload
      if (userInfo.token) {
        state.isLogin = true
        localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(userInfo))
      }
      state.userInfo = userInfo
    }
  }
})

export const { SET_USER_INFO } = userSlice.actions

export const loginByToken = (token: string) => (dispatch: AppDispatch) => {
  return serviceLoginByToken(token).then(res => {
    const userInfo = res.userInfo
    return dispatch(SET_USER_INFO(userInfo))
  })
}

export default userSlice.reducer

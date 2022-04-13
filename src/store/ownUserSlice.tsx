import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import {LOCAL_STORAGE} from "../constants"
import {serviceLoginByToken} from "../services"
import type {AppDispatch} from "."

export interface ownUserProps {
  username: string | undefined
  password: string | undefined
  token: string | undefined
}

export interface ownUserState {
  isLogin: boolean
  isLockScreen: boolean
  ownUser: ownUserProps
}

const initialState: ownUserState = {
  isLogin: false,
  isLockScreen: false,
  ownUser: {
    username: undefined,
    password: undefined,
    token: undefined,
  }
}

export const ownUserSlice = createSlice({
  name: "ownUser",
  initialState,
  reducers: {
    SET_OWN_USER: (
      state: ownUserState,
      action: PayloadAction<ownUserProps>,
    ) => {
      const ownUser = action.payload
      if (ownUser.token) {
        state.isLogin = true
        localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(ownUser))
      }
      state.ownUser = ownUser
    }
  }
})

export const {SET_OWN_USER} = ownUserSlice.actions

export const loginByToken = (token: string) => (dispatch: AppDispatch) => {
  return serviceLoginByToken(token).then(res => {
    const userInfo = res.userInfo
    return dispatch(SET_OWN_USER(userInfo))
  })
}

export default ownUserSlice.reducer

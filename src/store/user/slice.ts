import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import {userProps, userState} from "./type"

const initialState: userState = {
  isLogin: false,
  isLockScreen: false,
  user: {
    username: undefined,
    password: undefined,
    token: undefined,
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
})

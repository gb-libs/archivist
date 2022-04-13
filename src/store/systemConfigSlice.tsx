import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {serviceGetSystemInfo} from "../services"
import type {GetState, AppDispatch} from "."

export interface systemConfigProps {
  currentSystemTime: number
}

export interface systemConfigState {
  systemConfig: systemConfigProps
}

const initialState: systemConfigState = {
  systemConfig: {
    currentSystemTime: Date.now(),
  }
}

export const systemConfigSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    SET_SYSTEM_CONFIG: (
      state: systemConfigState,
      action: PayloadAction<systemConfigProps>) => {
      state.systemConfig = {
        ...action.payload
      }
    }
  }
})

export const {SET_SYSTEM_CONFIG} = systemConfigSlice.actions


export const getSystemInfo = () => (dispatch: AppDispatch, getState: GetState) => {
  serviceGetSystemInfo().then((res) => {
    dispatch(SET_SYSTEM_CONFIG(res as systemConfigProps))
  })
}


export default systemConfigSlice.reducer

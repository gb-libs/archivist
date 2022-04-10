import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {serviceGetSystemInfo} from '../services'
import type {GetState, AppDispatch} from '.'

export interface InfoProps {
  currentSystemTime: number
}

export interface SystemState {
  info: InfoProps
}

const initialState: SystemState = {
  info: {
    currentSystemTime: Date.now(),
  }
}

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    SET_INFO: (state: SystemState, action: PayloadAction<InfoProps>) => {
      state.info = {
        ...action.payload
      }
    }
  }
})

export const {SET_INFO} = systemSlice.actions


export const getSystemInfo = () => (dispatch: AppDispatch, getState: GetState) => {
  serviceGetSystemInfo().then((res) => {
    dispatch(SET_INFO(res as InfoProps))
  })
}


export default systemSlice.reducer

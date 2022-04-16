import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import {configProps, configState} from "./type"

const initialState: configState = {
  config: {
    currentSystemTime: Date.now(),
  }
}

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {}
})

import {configureStore} from "@reduxjs/toolkit"
import ownUserReducer from "./ownUserSlice"
import systemConfigReducer from "./systemConfigSlice"

const store = configureStore({
  reducer: {
    ownUser: ownUserReducer,
    systemConfig: systemConfigReducer,
  },
})

export default store

export type IStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type GetState = () => RootState

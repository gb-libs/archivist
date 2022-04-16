import {configureStore} from "@reduxjs/toolkit"

import {configSlice} from "./config/slice"
import {userSlice} from "./user/slice"


export const store = configureStore({
  reducer: {
    config: configSlice.reducer,
    user: userSlice.reducer,
  },
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

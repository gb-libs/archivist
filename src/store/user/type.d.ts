export interface userProps {
  username: string | undefined
  password: string | undefined
  token: string | undefined
}

export interface userState {
  isLogin: boolean
  isLockScreen: boolean
  user: userProps
}

// import http from "../utils/http"

export function serviceLogin(data: object) {
  // return http.post("/passport/local", data)
}

export function serviceLoginByToken(token: string) {
  // return http.get("/accessToken", {
  //   params: { token }
  // })
}

export function serviceLogout() {
  // return http.get("/logout")
}

export function serviceUpdateUser(data: object) {
  // return http.post("/user/update", data, {
  //   headers: { successAlert: "true" }
  // })
}

export function serviceGetUserConfig() {
  // return http.get("/userConfig")
}

export function serviceUpdateUserConfig(data: object) {
  // return http.put("/userConfig", data, {
  //   headers: { successAlert: "true" }
  // })
}

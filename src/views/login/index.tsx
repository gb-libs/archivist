import React, {useState, useEffect, useMemo} from "react"
import {useNavigate, useLocation} from "react-router-dom"
import {Button, Input, message, Popover, Form} from "antd"
import {
  PictureOutlined,
  LockOutlined,
  UserOutlined,
  GithubOutlined
} from "@ant-design/icons"
import classNames from "classnames"
// import {isEmpty} from "lodash"
import './style.scss'

import {useAppDispatch} from "../../hooks"
import Footer from "../../components/footer"
import logo from '../../assets/image/logo.svg'
import {CONFIG} from "../../config"

// import md5 from "blueimp-md5"
// import {loginByToken, SET_USER_INFO} from "@/store/userSlice"
// import {serviceLogin} from "@/services"
// import {LOCAL_STORAGE} from "@/constants"
// import {randomCode} from "@/utils"


// const PopoverContent = (
//   <div style={{padding: "10px 20px 10px 20px"}}>
//     <div>本站不开放注册账号，首次登陆请使用GitHub</div>
//     <div>登陆后系统将自动注册账号, 密码为123456</div>
//   </div>
// )

// const LOGIN_NAME = localStorage.getItem(LOCAL_STORAGE.LOGIN_NAME) || ""
//
// const captchaUrl = config.http.baseURL + "/captcha?code="

export default function () {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  // const redirectUrl = useMemo(() => {
  //   const url = qs.parse(location.search).redirectUrl as string
  //   return url || "/home/index"
  // }, [])

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()

      // setLoading(true)
      // serviceLogin({
      //   loginName: values.loginName.trim(),
      //   password: md5(values.password.trim()),
      //   code: values.code.trim()
      // })
      //   .then(res => {
      //     setLoading(false)
      //     dispatch(SET_USER_INFO(res.userInfo))
      //     navigate(redirectUrl, {replace: true})
      //   })
      //   .catch(() => {
      //     setLoading(false)
      //   })
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    // const query = qs.parse(location.search)
    // const {token, state} = query
    //
    // if (Number(state) === 0) {
    //   message.error("授权失败，请重新登录")
    //   return
    // }
    //
    // if (token) {
    //   dispatch(loginByToken(token as string))
    //     .then((res: any) => {
    //       if (!isEmpty(res.userInfo)) {
    //         navigate(redirectUrl, {replace: true})
    //       }
    //     })
    // }
  }, [history, location.search])

  useEffect(() => {
    // if (config.isDevelopment) {
    //   form.setFieldsValue({
    //     loginName: "test",
    //     password: "123456"
    //   })
    // }
  }, [])

  return (
    <section className="login-page">

      <div className="wrap">
        <div>
          <div className="logo-wrap">
            <img src={logo} className="logo" alt=""/>
            <em>{CONFIG.title}</em>
          </div>

          <Form form={form}>
            <Form.Item
              name="loginName"
              rules={[
                {
                  required: true,
                  message: "请输入用户名"
                }
              ]}
            >
              <Input
                placeholder="用户名"
                prefix={<UserOutlined/>}
                maxLength={32}
                autoComplete="off"
                onPressEnter={handleSubmit}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码"
                }
              ]}
            >
              <Input
                placeholder="密码"
                prefix={<LockOutlined/>}
                maxLength={32}
                type="password"
                autoComplete="off"
                onPressEnter={handleSubmit}
              />
            </Form.Item>


          </Form>

          <div className={classNames("login-bar", {
            "events-none": loading
          })}>
            {/*<GithubOutlined onClick={goGithubAuth}/>*/}
          </div>

          <Button
            type="primary"
            style={{marginTop: "20px"}}
            size="large"
            loading={loading}
            block
            onClick={handleSubmit}
          >
            {loading ? "登 录 中..." : "登 录"}
          </Button>
          {/*<div className="register">*/}
          {/*  <Popover*/}
          {/*    content={PopoverContent}*/}
          {/*    trigger="hover"*/}
          {/*    placement="bottomRight"*/}
          {/*  >*/}
          {/*    <span>注册账号</span>*/}
          {/*  </Popover>*/}
          {/*</div>*/}
        </div>
      </div>
      <Footer/>
    </section>
  )
}

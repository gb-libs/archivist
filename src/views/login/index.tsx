import React, {useState, useEffect, useMemo} from "react"
import {useNavigate, useLocation} from "react-router-dom"
import {Form, Input, Button, Checkbox} from "antd"
import {UserOutlined, LockOutlined} from "@ant-design/icons"

import classNames from "classnames"

import {useAppDispatch} from "../../hooks"
import Footer from "../../components/footer"
import LoginForm from "../../components/forms/login"
import logo from '../../assets/image/logo.svg'
import {CONFIG} from "../../config"

import "./style.scss"

export default function () {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()
  // const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  // const redirectUrl = useMemo(() => {
  //   const url = qs.parse(location.search).redirectUrl as string
  //   return url || "/home/index"
  // }, [])

  // const handleSubmit = async () => {
  //   try {
  //     const values = await form.validateFields()

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
  // } catch (err) {
  //   console.log(err)
  // }
  // }


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
        <div className="logo-wrap">
          <img src={logo} className="logo" alt=""/>
          <em>{CONFIG.title}</em>
        </div>
        <LoginForm/>
      </div>
      <Footer/>
    </section>
  )
}

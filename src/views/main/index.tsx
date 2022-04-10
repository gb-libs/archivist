import React from 'react'
import {Outlet} from 'react-router-dom'
import {Layout} from 'antd'

import Header from '../../components/header'

const {Content} = Layout

const HomeMainPage: React.FC = () => {
  return (
    <section className="home-main">
      <Layout>
        <Layout className="home-layout">
          <Header/>
          <Content id="container">
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </section>
  )
}

export default HomeMainPage

import React from 'react'
import {
  Content,
  Header
} from './index'

const Layout = () => {

  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <Header/>
        <div className="c-body">
          <Content/>
        </div>
      </div>
    </div>
  )
}

export default Layout

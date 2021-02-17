import React from 'react'
import {
  CHeader,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'


import { 
    DeviseDropdown,
    AccountDropdown
}  from './index'

const Header = () => {


  
  return (
    <CHeader withSubheader>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
        
          <CHeaderNavLink to="/ListWish"><CIcon name="cil-heart"/>&nbsp;My Wishlists</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/Products"> <CIcon name="cil-description" />&nbsp;My Products</CHeaderNavLink>
         

        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <AccountDropdown/>
        <DeviseDropdown/>
      </CHeaderNav>

      
    </CHeader>
  )
}

export default Header

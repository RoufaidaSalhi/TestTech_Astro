import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import avatar from '../assets/img/avatar.png'

const AccountDropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" >
        <div className="c-avatar">
          <CImg
            src={avatar}
            className="c-avatar-img"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        
    
      
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
       
               <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
            Logout        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AccountDropdown

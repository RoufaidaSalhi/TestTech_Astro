import React from 'react'
import {
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'

const DeviseDropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" >
        <strong>TND</strong>

      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
       
      
    
      </CDropdownMenu>
    </CDropdown>
  )
}

export default DeviseDropdown

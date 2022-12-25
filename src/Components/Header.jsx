import React from 'react'
import AccountIcon from './AccountIcon'
import CompareButton from './CompareButton'

const Header = () => {
  return (
    <div className="header">
      <div className="compare">
        <div className="logo">
            <img src="./logo.png" alt="logo"/>
            </div>
            <div>
              <CompareButton/>
            </div>
        
            </div>
        <div className="user-logo">
            <AccountIcon/>
        </div>
    </div>
  )
}

export default Header
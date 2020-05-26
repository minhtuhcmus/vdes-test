import React from 'react'
import './style.scss'

const AppMain = (props) => {
  return (
    <div className="root-main">
      {props.children}
    </div>
  )
}

export default AppMain
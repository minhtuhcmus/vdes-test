import React from 'react'
import './style.scss'

const TextInput = props => {
  const {
    size = 'normal',
    type = 'primary',
    value,
    onChange,
    validate,
    error,
    ...rest
  } = props
  return (
    <div className="component-text-input">
      <input
        {...rest}
        value={value}
        onChange={onChange}
        className={`${size} ${type}`}
      />
      <p>{error && <span>{error}</span>}</p>
    </div>
  )
}

export default TextInput
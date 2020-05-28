import React, { useState, useEffect } from 'react'
import API from '_api'
// packages
import { useHistory } from 'react-router-dom'
// components
import TextInput from '_components/text-input' 
const HomePage = () => {
  return (
    <div>
      <TextInput size="small"/>
      <TextInput/>
      <TextInput size="large"/>
    </div>
  )
}

export default HomePage
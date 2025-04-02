import React from 'react'
import './appDownLoad.css'
import { assets } from '../../assets/assets'

const AppDownLoad = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For better Experience Download  <br /> App </p>
      <div className='app-download-btn'>
        <div>
         <img src={assets.googlPlay} /> 
        </div>
        <div>
          <img src={assets.appStore} />
        </div>
      </div>
      
      
    </div>
  )
}

export default AppDownLoad

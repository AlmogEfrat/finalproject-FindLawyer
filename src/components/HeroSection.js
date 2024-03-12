import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1> FIND ME A LAWER </h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  )
}

export default HeroSection

//למקרה ונרצה להוסיף כפתור נוסף
//<Button
//className='btns'
//buttonStyle='btn--outline'
//buttonSize='btn--large'
//>
//GET STARTED
//</Button>

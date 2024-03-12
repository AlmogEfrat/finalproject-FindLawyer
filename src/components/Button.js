import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'] // מחלקות css יצירה אוטומטית של
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button //רכיב הכפתור שלנו
        className={'btn ${checkButtonStyle} ${checkButtonSize}'}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}

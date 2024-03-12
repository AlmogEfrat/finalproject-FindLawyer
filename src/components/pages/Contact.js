import React from 'react'
import '../../App.css'
import './Contact.css'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div className='contact-box'>
        <p>You can reach us on social media:</p>
        <ul>
          <li>
            <a
              href='https://www.facebook.com/yourfacebookpage'
              target='_blank'
              rel='noopener noreferrer'
            >
              Facebook
            </a>
            <div className='icom-media'>
              <FaFacebookSquare className='icon' />
            </div>
          </li>

          <li>
            <a
              href='https://www.instagram.com/yourinstagrampage'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
            <div className='icom-media'>
              <FaInstagramSquare className='icon' />
            </div>
          </li>

          <li>
            <a
              href='https://www.linkedin.com/in/almog-efrat-abergel/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linkdin
            </a>
            <div className='icom-media'>
              <FaLinkedin className='icon' />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

/*<FaLinkedin className='icon' />*/

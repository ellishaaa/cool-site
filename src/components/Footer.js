import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
          <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
              Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-subscription-text'>
              You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
              <form>
                <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder='Your Email'
                />
                <Button buttonStyle='submit-btn'>Subscribe</Button>
              </form>
            </div>
          </section>

          <section className='social-media'>
            <div className='social-media-wrap'>
              <small className='website-rights'>ellishaaa © {(new Date().getFullYear())}</small>
              <div className='social-icons'>

                <Link
                  className='social-icon-link github'
                  to='https://github.com/ellishaaa'
                  target='_blank'
                  aria-label='Github'
                >
                  <i className='fa-brands fa-github' />
                </Link>

                <Link
                  className='social-icon-link linkedin'
                  to='https://www.linkedin.com/in/ellisha-weber-585813191'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <i className='fa-brands fa-linkedin' />
                </Link>
              </div>
            </div>
          </section>
        </div>
      )
    
}

export default Footer

import React from 'react'
import './Footer.scss'
import  icon from '../../assets/svg/icon.svg'
import  qrCode from '../../assets/svg/qr-code.svg'
import  play from '../../assets/svg/play.svg'
import  appstore from '../../assets/svg/app store.svg'
import  img from '../../assets/svg/img.svg'
import  facebook from '../../assets/svg/facebook.svg'
import  linkedin from '../../assets/svg/linkedin.svg'
import  instagram from '../../assets/svg/instagram.svg'
import  group from '../../assets/svg/group.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer2 container'>

        <div className='div1'>
          <div className='Exclusive'>
            <h2>Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          </div>

          <div className='Enter'>
          <input type="text" placeholder='Enter your email' />
          <img src={icon} alt="" />
          </div>
        </div>

        <div className='div2'>
          <h3>Support</h3>
          <div className='Bijoy'>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        <div className='div3'>
          <h3>Account</h3>

          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className='div4'>
          <h3>Quick Link</h3>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='div5'>


          <div className='Download'>
            <h3>Download App</h3>

            <div className='New'>
              <p>Save $3 with App New User Only</p>

              <div className='imgs'>
              <div>
                <img src={qrCode} alt="" />
              </div>

              <div>
                <img src={play} alt="" />
                <img src={appstore} alt="" />
              </div>

              </div>

              

            </div>
          </div>

          <div className='imgss'>
            <div>
              <img src={facebook} alt="" />
            </div>

            <div>
              <img src={img} alt="" />
            </div>

            <div>
              <img src={instagram} alt="" />
            </div>

            <div>
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>

<div style={{border:"1px solid rgb(255, 255, 255)", opacity:' 0.4', marginTop:"60px"}}></div>

      <div className='div6 container'>
      <img src={group} alt="" />
        <div className='Rimel'>
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import "./Footer.css"
import logo from "../../images/abdulaziz/logo.png"
import frame from "../../images/abdulaziz/Frame.png"
import f190 from "../../images/abdulaziz/190.png"
import f189 from "../../images/abdulaziz/189.png"
import f191 from "../../images/abdulaziz/191.png"

function Footer() {
  return (
    <div className=''>
      <div className="abdulaziz">
        <div className="nurikot">
          <img className='logo' src={logo} alt="" />
          <h4>Empower your creativity.</h4>
        </div>
        <div className="abdil">
          <div className="nur">
            <h4>CRYPTER.</h4>
            <ul className='ul'>
              <li><a href="#">Explorer</a></li>
              <li><a href="#">Connect wallet</a></li>
              <li><a href="#">Upload</a></li>
              <li><a href="#">How it work</a></li>
            </ul>
          </div>


          <div className="nurk">
            <h4>INFO</h4>
            <ul className='ul1'>
              <li><a href="#">Explorer</a></li>
              <li><a href="#">Connect wallet</a></li>
              <li><a href="#">Upload</a></li>
              <li><a href="#">How it work</a></li>
            </ul>
          </div>


          <div className="nuri">
            <h4>SOCIAL</h4>
            <ul className='ul1'>
              <li><a href="#">Instagramm</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Mirror</a></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="hr">
        <hr />
      </div>

      <div className="abu">
        <div className="abi">
          <p>Copyright © 2022 UI8 LLC. All rights reserved</p>
          
        </div>
        <div className="abi1">
        <p>We use cookies for better service.</p>
          <button>ACCEPT</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
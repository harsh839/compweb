import React from 'react'
import '../Footer/footer.css'

const index = () => {
  return (
    <div classname="bazzu">
            <footer>
                <div classname="content" >
                  <div classname="top">
                    <div classname="logo-details">
                      {/* <!-- <i classname="fab fa-slack"></i> -->
                      {{!-- <img style="height: 6vh; width:3vw; border-radius: 250px; margin-top: -0vh;" src="1.png" alt=""> --}} */}
                      <span classname="logo_name">VoWHELM</span>
                    </div>
                    <div classname="media-icons">
                      <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                      <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                      <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                      <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                      {/* <!-- <a href="#"><i classname="fab fa-youtube"></i></a> --> */}
                    </div>
                  </div>
                  <div classname="link-boxes">
                    <ul classname="fox">
                      <li classname="link_name">Company</li>
                      <li><a href="/">Home</a></li>
                      <li><a href="/contact">Contact us</a></li>
                      <li><a href="/about">About us</a></li>
                      <li><a href="/register">Get started</a></li>
                    </ul>
                    <ul classname="fox">
                      <li classname="link_name">Services</li>
                      <li><a href="#">App design</a></li>
                      <li><a href="#">Web design</a></li>
                      <li><a href="#">Logo design</a></li>
                      <li><a href="#">Banner design</a></li>
                    </ul>
                    <ul classname="fox">
                      <li classname="link_name">Account</li>
                      <li><a href="#">Profile</a></li>
                      <li><a href="#">My account</a></li>
                      <li><a href="#">Prefrences</a></li>
                      <li><a href="#">Purchase</a></li>
                    </ul>
                   
                    <ul classname="fox input-box">
                      <li classname="link_name">Subscribe</li>
                      <li><input type="text" placeholder="Enter your email"/></li>
                      <li><input type="button" value="Subscribe"/></li>
                    </ul>
                  </div>
                </div>
                <div classname="bottom-details">
                  <div classname="bottom_text">
                    <span classname="copyright_text">Copyright © 2023 <a href="#">VoWHELM.</a>All rights reserved</span>
                    <span classname="policy_terms">
                      <a href="#">Privacy policy</a>
                      <a href="#">Terms & condition</a>
                    </span>
                  </div>
                </div>
              </footer>
        </div>
  )
}

export default index

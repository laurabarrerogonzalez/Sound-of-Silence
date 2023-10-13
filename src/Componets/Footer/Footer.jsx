import React from 'react';
import "../../Componets/Footer/Footer.css";



const Footer=()=>{
  return(
    <div className="footer">
      <div className="sb_footer section_padding">
      <div className="sb_footer-links">
        <div className="sb_footer-links_div">
          <h4>For Busissnes</h4>
          <a href="#">
            <p>Employer</p>
          </a>

          <a href="#">
          <p>Health Plan</p>
          </a>

          <a href="#">
          <p>Individual</p>
          </a>

        </div>
        <div className="sb_footer-links_div">
          <h4>Resources</h4>
          <a href="#">
            <p>Resource center</p>
          </a>

          <a href="#">
            <p>Testimonials</p>
          </a>

          <a href="#">
            <p>STV</p>
          </a>
        </div>
        <div className="sb_footer-links_div">
          <h4>Partners</h4>
          <a href="#">
            <p>Swing Tech</p>
          </a>
        </div>
        <div className="sb_footer-links_div">
          <h4>Company</h4>
          <a href="#">
            <p>About</p>
          </a>

          <a href="#">
            <p>Press</p>
          </a>

          <a href="#">
            <p>Career</p>
          </a>

          <a href="#">
            <p>Contact</p>
          </a>
        </div>
        <div className="sb_footer-links_div">
          <h4>Coming soon on</h4>
          <div className="socialmedia">
            <p><img src="https://res.cloudinary.com/dqc0wvttr/image/upload/v1695800992/2227_ppwytm.jpg" alt=""/></p>
            <p><img src="https://res.cloudinary.com/dqc0wvttr/image/upload/v1695800934/facebook_jriern.png" alt=""/></p>
            <p><img src="https://res.cloudinary.com/dqc0wvttr/image/upload/v1695801650/tik-tok_1_haqcvk.png" alt=""/></p>
            <p><img src="https://res.cloudinary.com/dqc0wvttr/image/upload/v1695801493/nuevo-logotipo-twitter-ahora-llamada_aiqpmp.webp" alt=""/></p>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>
            @{new Date().getFullYear()} CodeInn. All right reserved.
          </p>
        </div>
        <div className="sb_footer-below-links">
          <a href="#"><div><p>Terms & Conditions</p></div></a>
          <a href="#"><div><p>Privacy</p></div></a>
          <a href="#"><div><p>Security</p></div></a>
          <a href="#"><div><p>Cookie Declaration</p></div></a>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer;
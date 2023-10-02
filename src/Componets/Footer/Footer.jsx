import React from 'react';
import "../../Componets/Footer/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="politics">
        <h1>Contact us</h1>
        <h1>SoundOfSilences@gmail.com</h1>
      </div>

      <div className="socialnetwords">
        <img
          src="https://res.cloudinary.com/dqc0wvttr/image/upload/v1695800992/2227_ppwytm.jpg"
          alt="Instagram"
        />
        <img
          src="https://res.cloudinary.com/dqc0wvttr/image/upload/v1695800934/facebook_jriern.png"
          alt="Facebook"
        />
        <img
          src="https://res.cloudinary.com/dqc0wvttr/image/upload/v1695801650/tik-tok_1_haqcvk.png"
          alt="Instagram"
        />
        <img
          src="https://res.cloudinary.com/dqc0wvttr/image/upload/v1695801493/nuevo-logotipo-twitter-ahora-llamada_aiqpmp.webp"
          alt="Instagram"
        />
      </div>

      <div className="politics">
        <h1>Privacy Policy</h1>
      </div>
    </footer>
  );
}

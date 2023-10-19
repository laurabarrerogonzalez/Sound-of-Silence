import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../../Componets/Footer/Footer.jsx';
import './Relax.css'; 

const Relax = () => {
  return (
    <>
      <Navbar />

      <div className="relax-landing">
        <h1>Tips for Relaxing by Listening to Nature Sounds and Instruments</h1>
        <div className="relax-content">
          <h2>Tips for a Relaxing Experience</h2>
          <h5>
            Enjoy the sounds of nature and instrument melodies for a complete relaxation experience. Here are some tips to make the most of your experience:
          </h5>
          <ul>
            <li>
              <h3>1. Select appropriate sounds:</h3>
              <h5>
                Choose sounds from nature such as birdsong, the sound of ocean waves or gentle streams. You can also opt for melodies from instruments such as the flute, piano or guitar, depending on your preferences.
              </h5>
            </li>

            <li>
              <h3>2. Create a calm atmosphere:</h3>
              <h5>
                Find a serene and comfortable place. You can adjust the lighting, light candles or incense, and perhaps use quality headphones to fully immerse yourself in the sounds.
              </h5>
            </li>

            <li>
              <h3>3. Practice meditation or deep breathing:</h3>
              <h5>
                Combine music with meditation or deep breathing techniques. This will help you relax and focus on the present moment.
              </h5>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Relax;

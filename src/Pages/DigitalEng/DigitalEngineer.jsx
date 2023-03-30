import React from 'react';
import Footer from '../NewFooter/Footer';
import './DigitalEngineer.scss';

const DigitalEngineer = () => {
  return (
    <div className='digital_img'>
      <img
        className='digital_slide-vido'
        src='rgs-img/digital_trans.jpg'
        alt=''
      />
      <h3 className='digital_h3'>Digital Engineering and Transformation</h3>

      <p className='digital_eng_p'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <br />
        <br />
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>

      <div className='digital_trans_imgs'>
        <img src='rgs-img/transform.jpg' alt=''></img>
      </div>

      <h3 className='digitals_trns_h3'>
        More Information Digital Transformation
      </h3>

      <button className='digts_trns_btn'>Learn More</button>

      {/* Digital Client Story */}

      <div className='aws-client_info'>
        <div className='digital_eng_imgs'>
          <img src='rgs-img/trans_imgs.jpg' alt=''></img>
        </div>

        <div className='digital-client_wrap'>
          <h3 className='digital_transp-style'>
            {' '}
            Human-centric design transforms customer support{' '}
          </h3>

          <p className='digts_trnsp_p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>

          <button className='digts_trnsfor_btn'>Read full Story</button>
        </div>
      </div>

      {/* digital offering */}

      <div className='digital_offer_container'>
        <h2 className='digtal__offer_h2'>Our Offering</h2>

        <div className='digital_contains'>
          <div className='digital_box'>
            <div className='digit_imgBox'>
              <img src='rgs-img/digital_mark.jpg' alt=''></img>
            </div>

            <div className='digt_content'>
              <div>
                <h2>Digital Marketing</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo non sunt perspiciatis perferendis totam iure minus
                  reiciendis obcaecati, eaque, ipsam maxime error, dicta ab!
                </p>
              </div>
            </div>
          </div>



          <div className='digital_box'>
            <div className='digit_imgBox'>
              <img src='rgs-img/digitalaws.jpeg' alt=''></img>
            </div>

            <div className='digt_content'>
              <div>
                <h2>image Style</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo non sunt perspiciatis perferendis totam iure minus
                  reiciendis obcaecati, eaque, ipsam maxime error, dicta ab!
                </p>
              </div>
            </div>
          </div>



          <div className='digital_box'>
            <div className='digit_imgBox'>
              <img src='rgs-img/Capital-markets.png' alt=''></img>
            </div>

            <div className='digt_content'>
              <div>
                <h2>image Style</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo non sunt perspiciatis perferendis totam iure minus
                  reiciendis obcaecati, eaque, ipsam maxime error, dicta ab!
                </p>
              </div>
            </div>
          </div>





        </div>
      </div>
<Footer/>
    </div>
  );
};

export default DigitalEngineer;

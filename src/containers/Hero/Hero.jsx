import React from 'react';
import './Hero.scss';
import { images } from '../../constants';
import { BsFillPlayFill } from 'react-icons/bs';


const Hero = () => {
  return (
    <section className='hero'>
        <div className="worldmap"></div>
        
        <div className="container">

          <div className="hero__top">
            <h1 className="display-1">Modern online and offline payments for Africa</h1>
            <p className="p-20">Paystack helps businesses in Africa get paid by anyone, anywhere in the world</p>
            <div className="cfa__btn">
              <a href="/#" className="create__account-bg">Create free account</a>
            </div>
          </div>

          <div className="hero__bottom">
            <div className="logos">
              <p>Trusted by over 60,000 businesses</p>

              <div className='logo__flex'>
                <div className="logo">
                  <img src={images.dominos} alt="Dominos" />
                </div>
                <div className="logo">
                  <img src={images.mtn} alt="Mtn" />
                </div>
                <div className="logo">
                  <img src={images.boltStack} alt="Bolt" />
                </div>
                <div className="logo">
                  <img src={images.axaMansard} alt="Axa mansard" />
                </div>
              </div>
            </div>

            <div className="video__summary">
              <div>
                <p>Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss working with Paystack</p>
              </div>
              <div className="large__button">
                <button className="button">
                  <BsFillPlayFill className="button__icon" />
                </button>
              </div>
              <div className="small__button">
                <button className="button">
                  <BsFillPlayFill />
                  Play Video
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Hero;
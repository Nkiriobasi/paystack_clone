import React from 'react';
import './PoweringGrowth.scss';
import { images } from '../../constants';


const PoweringGrowth = () => {
  return (
    <section className='padding-top-150 padding-bottom-150'>
        <div className="container">
            <div className="header__body">
                <h1 className="display-1">Powering growth for amazing businesses</h1>
                <p className="p-20">Paystack is a growth engine for a new generation 
                    of innovative, forward-looking organizations operating in Africa.
                </p>
            </div>

            <div className="logo__row">
                <div className="logo">
                    <img src={images.AirPeaceStack} alt="" />
                </div>
                <div className="logo">
                    <img src={images.FilmHouseStack} alt="" />
                </div>
                <div className="logo">
                    <img src={images.PiggyvestStack} alt="" />
                </div>
                <div className="logo">
                    <img src={images.IbomAir} alt="" />
                </div>
                <div className="logo">
                    <img src={images.KudaStack} alt="" />
                </div>
                <div className="logo">
                    <img src={images.AriiyaStack} alt="" />
                </div>
            </div>

            <div className="logo__row">
                <div className="logo">
                <img src={images.dominos} alt="" />
                </div>
                <div className="logo">
                <img src={images.mtn} alt="" />
                </div>
                <div className="logo">
                <img src={images.LagosInternalRevenue} alt="" />
                </div>
                <div className="logo">
                <img src={images.boltStack} alt="" />
                </div>
                <div className="logo">
                <img src={images.BetWay} alt="" />
                </div>
                <div className="logo">
                <img src={images.Carbon} alt="" />
                </div>
            </div>

            <div className="logo__row">
                <div className="logo">
                    <img src={images.axaMansard} alt="" />
                </div>
                <div className="logo">
                    <img src={images.AbiaStateUni} alt="" />
                </div>
                <div className="logo">
                    <img src={images.GIGM} alt="" />
                </div>
                <div className="logo">
                    <img src={images.IrokoTV} alt="" />
                </div>
                <div className="logo">
                    <img src={images.SmilePlain} alt="" />
                </div>
                <div className="logo">
                    <img src={images.CowrywiseDark} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default PoweringGrowth;
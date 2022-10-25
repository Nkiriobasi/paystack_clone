import React from 'react';
import './Header.scss';
import { images } from '../../constants'


const Header = () => {
  return (
    <header>
        <nav>
            <div className="left">
                <a href="/#">
                    <img src={images.paystackLogo} alt="logo" />
                </a>
                <ul></ul>
            </div>

            <div className="right"></div>

            <div className="menu"></div>
        </nav>
    </header>
  );
}

export default Header;
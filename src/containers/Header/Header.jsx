import React from 'react';
import './Header.scss';
import { images } from '../../constants';
import { MdArrowDropDown } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';


const Header = () => {
  return (
    <header>
        <nav>
          
            <div className="left">
              <a href="/#">
                <img src={images.paystackLogo} alt="logo" className='logo' />
              </a>

              <ul className='nav__ul'>
                <li className='nav__li'>
                  <a href="/#" className="nav__link">
                    Why Paystack
                    <MdArrowDropDown className='nav__dropdown-icon' />
                  </a>
                </li>
                <li className='nav__li'>
                  <a href="/#" className="nav__link">Customers</a>
                </li>
                <li className='nav__li'>
                  <a href="/#" className="nav__link">Pricing</a>
                </li>
                <li className='nav__li'>
                  <a href="/#" className="nav__link">
                    Learn
                    <MdArrowDropDown className='nav__dropdown-icon' />
                  </a>
                </li>
              </ul>
            </div>

            <div className="right">
              <ul className="nav__ul">
                <li className="nav__li">
                  <a href="/#" className="nav__link">
                    Developers
                    <MdArrowDropDown className='nav__dropdown-icon' />
                  </a>
                </li>
                <li className="nav__li">
                  <a href="/#" className="nav__link">
                    Support
                    <MdArrowDropDown className='nav__dropdown-icon' />
                  </a>
                </li>
                <li className="nav__li">
                  <a href="/#" className="nav__link">Login</a>
                </li>
                <li className="create">
                  <a href="/#" className="create__account">Create free account</a>
                </li>
                <li>
                  <span>
                    <img src={images.ng} alt="ng flag" className='ng__flag' />
                  </span>
                </li>
              </ul>
            </div>

            <div className="menu">
              <AiOutlineMenu className='menu__bar' />
            </div>
        </nav>
    </header>
  );
}

export default Header;
import './Cta.scss';
import { IoIosArrowDropright } from 'react-icons/io';

const Cta = ({ text }) => {
    return (
      <div className='cta'>
        <a href='/#' className='cta__link'>
          <span className='cta-svg'>
            <IoIosArrowDropright className='arrow-right' />
          </span>

          <span className='cta-text'>{text}</span>
        </a>
      </div>
    );
  }
  
  export default Cta;
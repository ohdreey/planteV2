import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navBarContainer'>
      <div className='logoContainer'>MANDRAGÖRE</div>
      <div className='linkNavContainer'>
        <Link to='/'> HOME</Link>
        <Link to='/all'>SHOP</Link>
        <Link to='/aboutus'>ABOUT US</Link>
        <Link to='/contact'>CONTACT</Link>
      </div>
      {/* <div className='shopContainer'>
        <div className='imgShopContainer'></div>
      </div> */}
    </div>
  );
};

export default Navbar;

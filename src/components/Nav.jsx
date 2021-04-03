import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const style = {
    color: 'white',
    marginRight: '.4rem',
  };
  const navStyle = {
    display: 'flex',
    listStyle: 'none',
  };
  return (
    <nav>
      <Link to='/' style={style}>
        <h3>Logo</h3>
      </Link>
      <ul className='nav-links' style={navStyle}>
        <Link style={style} to='/about'>
          <li>About</li>
        </Link>
        <Link style={style} to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

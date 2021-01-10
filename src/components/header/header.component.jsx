import React from 'react';
import { Navbar } from 'react-bootstrap';
import './header.styles.scss';

const Header = () => {
  return (
    <Navbar className='my-nav' bg='light' variant='light'>
      <Navbar.Brand href='#home'>Ortex</Navbar.Brand>
    </Navbar>
  );
};

export default Header;

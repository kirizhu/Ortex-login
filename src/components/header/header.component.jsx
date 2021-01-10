import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import './header.styles.scss';

const Header = () => {
  const [data, setData] = useState('');

  let socket = new WebSocket(
    'ws://stream.tradingeconomics.com/?client=guest:guest'
  );

  socket.onmessage = function (e) {
    setData(e.data);
    console.log(e.data);
  };

  socket.onopen = function (e) {
    socket.send('{"topic": "subscribe", "to": "EURUSD:CUR"}');
  };

  return (
    <Navbar className='my-nav' bg='primary' variant='dark'>
      <Navbar.Brand href='#home'>Ortex</Navbar.Brand>
      <span>{data}</span>
    </Navbar>
  );
};

export default Header;

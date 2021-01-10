import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PwdReset from '../pwd-reset/pwd-reset.component';
import './sign-in.styles.scss';

const SignIn = () => {
  const history = useHistory();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className='sign-in'>
      <h2>Sign in</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <div className='label'>
            <Form.Label>Email Address</Form.Label>
          </div>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <div className='label'>
            <Form.Label>Password</Form.Label>
          </div>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          SIGN IN
        </Button>
      </Form>
      <div>
        Not a member yet?
        <Button onClick={() => history.push('/signup')} variant='link'>
          Sign Up
        </Button>
      </div>
      <PwdReset />
    </div>
  );
};

export default SignIn;

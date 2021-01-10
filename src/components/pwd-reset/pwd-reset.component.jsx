import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const PwdReset = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const {
    email,
    oldPassword,
    newPassword,
    confirmNewPassword,
  } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div>
      <Button variant='link' onClick={handleShow}>
        Reset password
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Reset Password</Modal.Header>
        <Modal.Body>
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
                <Form.Label>Old Password</Form.Label>
              </div>
              <Form.Control
                type='password'
                placeholder='Old password'
                name='oldPassword'
                value={oldPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <div className='label'>
                <Form.Label>New Password</Form.Label>
              </div>
              <Form.Control
                type='password'
                placeholder='New password'
                name='newPassword'
                value={newPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <div className='label'>
                <Form.Label>Confirm New Password</Form.Label>
              </div>
              <Form.Control
                type='password'
                placeholder='Confirm new password'
                name='confirmNewPassword'
                value={confirmNewPassword}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant='primary' onClick={handleClose}>
            SAVE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PwdReset;

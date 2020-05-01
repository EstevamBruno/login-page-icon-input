import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';
import Footer from '../../components/Footer';

export default function Login() {
  useEffect(() => {
    document.title = 'Login';
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Login</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <form>
              <div className='input-group'>
                <span>Username</span>
                <input id='username' type='text' placeholder='&#xf007;' />
              </div>
              <div className='input-group'>
                <span>Password</span>
                <input id='password' type='Password' placeholder='&#xf084;' />
              </div>
              <div className='buttons'>
                <button type='submit' className='submit-button'>
                  Enter
                </button>
                <button type='button'>Register</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

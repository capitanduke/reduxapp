import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';


import Posts from './components/Posts';
import Postform from './components/Postform';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <Postform />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <Posts />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;

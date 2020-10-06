import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import { Container } from 'react-bootstrap';
import './bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

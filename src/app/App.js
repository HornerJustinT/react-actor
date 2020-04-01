import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Form from '../Form/Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <Footer />
        <Form/>
      </div>
    );
  }
}

export default App;
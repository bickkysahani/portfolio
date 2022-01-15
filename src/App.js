import './assets/css/style.css';
import Header from './components/Header';
import React, { Component } from 'react'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Github from './components/Github';
import Posts from './components/Posts';
import Works from './components/Works';
import Footer from './components/Footer';



export class App extends Component {
  
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Skills />
        <Github />
        <Posts />
        <Works />
        <Footer />
      </>
    )
  }
}

export default App;

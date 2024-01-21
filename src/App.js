import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import TypingText from './components/Typing-text';
import Resume from './components/Resume';
//import FAQ from './components/FAQ';
//import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Porfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <TypingText resumeData={resumeData}/>
        <Porfolio resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
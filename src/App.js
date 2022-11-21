import './App.css';
import {Brand, CTA, Navbar} from './components';
import { Footer, Blog, Possibility, Features, WhatGTP3, Header } from './containers'

function App() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>
    </div>
      <Brand/>
      <WhatGTP3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    
    </div>
  );
}

export default App;

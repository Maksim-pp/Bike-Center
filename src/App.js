import './App.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Submenu from './Components/Header/Subtitle/Submenu/Submenu';
import MobileBody from './Components/MobileBody/MobileBody';
import React, { useState } from 'react'
import MobileFooter from './Components/MobileFooter/MobileFooter';
import MobileHeader from './Components/MobileHeader/MobileHeader';


function App() {

  const [show, setShow] = useState(false)
  const Click = (event) => {
    setShow(current => !current)
  }

  return (
    <div className="App">
      <div className='block'>
        <Header Click={Click} />
      {show ? <Submenu /> : null}
      <Body />
      <Footer />
      </div>
      <div className='mobile'>
        <MobileHeader />
        <MobileBody />
        <MobileFooter />
      </div>
    </div>
  );
}

export default App;

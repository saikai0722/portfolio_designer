import React from 'react';
import Router from './Router';
import './assets/reset.css';
import './assets/css/style.css';
import {Footer, ScrollToTop} from './components/UIkit'
import {Header} from './components/Header'


const App = () => {
  return(
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  )
}

export default App;
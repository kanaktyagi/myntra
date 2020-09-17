import React from 'react';
import Header from './Header'
import Filter from './Filter'
import Main from './Main'
import './App.css';

function App() {
  return (
   <div className="app">
    <Header/>
    <div className="app_body">
    <Filter />
     <Main />
    {/* <Footer /> */
   }
    </div>
    </div>
  );
}

export default App;

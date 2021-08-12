import React from 'react';
import FullName from './compenent/profil/FullName'
import Profilphoto from './compenent/profil/Profilphoto'
import Address from './compenent/profil/Address'
import './App.css';

class App extends React.Component {
  render() {  
  return (
    <div className="App">
    <Profilphoto/>
    <FullName/>
    <Address/>

    </div>
  );
   } }
export default App;

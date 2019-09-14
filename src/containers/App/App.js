import React from 'react';
import imageUrl from '../../assets/images/choerry_motion_1.jpg'
import './App.css';

function App() {

  return (
      <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
          <div className="App-content">
            <p>working on it to B#RN (or not)</p>
          </div>
      </div>
  );
}

export default App;

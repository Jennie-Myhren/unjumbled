import React from 'react';
import { Navbar } from './index';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <img src="https://i.picsum.photos/id/24/1213/450.jpg" />
        {/* <img src="https://i.picsum.photos/id/223/1228/816.jpg" /> */}
        <h1 className="centered">Welcome to your online office!</h1>
      </div>
    </div>
  );
};

export default App;

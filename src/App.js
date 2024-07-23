// src/App.js
import React from 'react';
import VisitCounter from './Comonent/VisitCounter';
import Blog from './Comonent/Blog';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <VisitCounter /> */}
        
        <Blog/>
      </header>
    </div>
  );
};

export default App;

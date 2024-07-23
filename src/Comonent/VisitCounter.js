// src/VisitCounter.js
import React, { useEffect, useState } from 'react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Get the current count from local storage
    let count = localStorage.getItem('visitCount');
    
    // If there is no count yet, initialize it to 0
    if (count === null) {
      count = 0;
    } else {
      // Otherwise, parse the count to an integer
      count = parseInt(count, 10);
    }

    // Increment the count
    const newCount = count + 1;

    // Update the count in state and local storage
    setVisitCount(newCount);
    localStorage.setItem('visitCount', newCount);
  }, []);

  return (
    <div>
      <h1>Page Visit Counter</h1>
      <p>This page has been visited {visitCount} times.</p>
    </div>
  );
};

export default VisitCounter;

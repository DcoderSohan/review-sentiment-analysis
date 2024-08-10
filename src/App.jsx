import React from 'react';
import ReviewsList from './Components/ReviewList.jsx';
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <h1>Reviews</h1>
      <ReviewsList />
    </div>
  );
};

export default App;

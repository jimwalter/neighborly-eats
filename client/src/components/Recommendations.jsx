import React from 'react';
import Restaurant from './Restaurant.jsx';

const Recommendations = () => {
  return (
    <section>
      <h2>
        Recommendations
      </h2>
      <br/>
      <div className="grid">
        <Restaurant/><Restaurant/><Restaurant/>
      </div>
    </section>
  )
}

export default Recommendations;
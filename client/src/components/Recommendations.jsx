import React from 'react';
import Restaurant from './Restaurant.jsx';

const Recommendations = () => {
  return (
    <section className="row">
      <h2>
        Recommendations
      </h2>
      <div className="grid">
        <Restaurant/><Restaurant/><Restaurant/>
      </div>
    </section>
  )
}

export default Recommendations;
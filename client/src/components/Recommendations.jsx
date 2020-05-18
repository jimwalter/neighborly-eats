import React from 'react';
import Restaurant from './Restaurant.jsx';

const Recommendations = (props) => {
  console.log(props.class);
  return (
    <section className="grid">
      <div className="recommendations">
        {props.recs.map((rec) =>
           <Restaurant key={rec.id} info={rec} />
        )}
      </div>
    </section>
  )
}

export default Recommendations;
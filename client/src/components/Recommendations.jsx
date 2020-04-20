import React from 'react';
import Restaurant from './Restaurant.jsx';

const Recommendations = (props) => {
  console.log(props.recs.map(rec => console.log(rec)));
  return (
    <section>
      <h2>
        Recommendations
      </h2>
      <br/>
      <div className="grid">
        {props.recs.map((rec) =>
           <Restaurant key={rec.id} info={rec} />
        )}
      </div>
    </section>
  )
}

export default Recommendations;
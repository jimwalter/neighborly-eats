import React from 'react';

const SectionBreak = (props) => {
  return(
    <section className="row-alt">
      <div className="lead container">
        <h1>{props.title}</h1>
      </div>
    </section>
  )
}

export default SectionBreak;
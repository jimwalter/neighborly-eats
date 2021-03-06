import React from 'react';

const Droplist = (props) => {
  return (
    <div>
      <label>
        What Are You In The Mood For:
        <select onChange={props.catSelect} name="category">
          <option value="">--Please Choose An Option--</option>
          {props.categories.map( category => (
            <option key={category.num} value={`"${category.name}"`}>{category.name}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Droplist;
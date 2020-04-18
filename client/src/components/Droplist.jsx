import React from 'react';

const Droplist = (props) => {
  return (
    <div>
      <label>
        What Are You In The Mood For:
        <select name="category">
          <option value="">--Please choose an option--</option>
          {props.categories.map( category => (
            <option key={category.num} value={`"${category.name}"`}>{category.name}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Droplist;
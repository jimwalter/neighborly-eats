import React from 'react';

const Droplist = (props) => {
  console.log(props);
  return (
    <div>
      <label htmlFor="pet-select"><h2>What Are You In The Mood For:</h2></label>
      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
         {props.categories.map( category => (
          <option key={category.num} value={`"${category.name}"`}>{category.name}</option>
        ))}
          {/* <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option> */}
      </select>
    </div>
  )
}

export default Droplist;
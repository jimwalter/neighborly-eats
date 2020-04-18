import React from 'react';
import Droplist from './Droplist.jsx';

const Form = (props) => {
  return (
    <div className="form">
      <form>
        <label htmlFor="zip"><h2>Enter Your Zip Code:</h2></label>
        <input type="number" id="zip" required />
      </form>
      <Droplist categories={props.categories}/>
    </div>
  )
}

export default Form;
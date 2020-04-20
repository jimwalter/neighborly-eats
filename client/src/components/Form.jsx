import React from 'react';
import Droplist from './Droplist.jsx';

const Form = (props) => {
  return (
    <div className="grid form">
      <form className="col-1-3">
        <fieldset className="register-group">
          <label>Enter Your Zip Code:
            <input type="number"
              pattern="[0-9]{5}"
              name="zip"
              placeholder="Zip Code"
              required
              onChange={props.zipChange}/>
          </label>
          <Droplist catSelect={props.catSelect} categories={props.categories}/>
        </fieldset>
      </form>
    </div>
  )
}

export default Form;
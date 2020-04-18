import React from 'react';
import Droplist from './Droplist.jsx';

const Form = (props) => {
  return (
    <div className="grid form">
      <form className="col-1-3">
        <fieldset className="register-group">
          <label>Enter Your Zip Code:
            <input type="number" name="zip" placeholder="Zip Code" required />
          </label>
          <Droplist categories={props.categories}/>
        </fieldset>
      </form>
    </div>
  )
}

export default Form;
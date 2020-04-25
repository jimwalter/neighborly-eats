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
      <section className="col-2-3 rightside">
        <h2>Support Your Neighborhood Restaurants, Eat Local</h2><br/>
        <p>For neighborhoods feeling the effects of COVID-19, it's never been more important to eat local.
          You enter your neighborhood and the type of food you're in the mood for, we'll make the recommendations!</p>
      </section>
    </div>
  )
}

export default Form;
import React from "react";

const Form = (props) => {
  return (
    <div className="form-section">
      <section className="form-info">
        <h2>Support Your Neighborhood Restaurants, Eat Local</h2>
        <br />
        <p>
          For neighborhood restaurants feeling the effects of COVID-19, it's never been more important to eat local. You
          enter your neighborhood and the type of food you're in the mood for, we'll make the recommendations!
        </p>
      </section>
      <form className="form">
        <label htmlFor="zip">Enter Your Zip Code:</label>
        <input type="number" pattern="[0-9]{5}" name="zip" placeholder="Zip Code" required onChange={props.zipChange} />
        <br />
        <label>What Are You In The Mood For:</label>
        <select onChange={props.catSelect} name="category">
          <option value="">Please Choose An Option</option>
          {props.categories.map((category) => (
            <option key={category.num} value={`"${category.name}"`}>
              {category.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Form;

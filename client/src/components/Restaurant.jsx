import React from 'react';

const Restaurant = (props) => {
  const brStyle = {padding: '15px'}
  return (
    <section className="teaser col-3-3">
      <h3>Restaurant Name Goes Here</h3>
      <br/>
      <img src="" alt="Yelp Image"/>
      <p>Description Goes Here</p>
      <br/>
      <form>
        <a href="{props.URL}" target="_blank">
          <input className="btn btn-default" type="submit" name="submit" value="Menu"/>
        </a>
        <br/><br/>
        <a href="https://www.doordash.com/en-US">
          <input className="btn btn-default" type="submit" name="submit" value="DoorDash"/>
        </a>
      </form>
    </section>
  )
}

export default Restaurant;
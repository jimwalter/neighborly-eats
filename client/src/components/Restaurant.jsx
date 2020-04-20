import React from 'react';

const Restaurant = (props) => {
  console.log(props.info);
  const brStyle = {padding: '15px'}
  return (
    <section className="teaser col-3-3">
      <h3>{props.info.name}</h3>
      <br/>
      <img src={`${props.info.image_url}`} alt="Yelp Image"/>
      <p>Phone: {props.info.display_phone}</p>
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
import React from 'react';

const Restaurant = (props) => {
  const brStyle = {padding: '15px'}
  return (
    <section className="teaser col-3-3">
      <h3>{props.info.name}</h3>
      <br/>
      <img src={`${props.info.image_url}`} alt="Yelp Image"/>
      <p>Phone: {props.info.display_phone || 'N/A'}</p>
      <p className="p-padding">Rating: {props.info.rating || 'N/A'}</p>
      <br/>
      <form>
      <a href="#" onClick={(e) =>{
        e.preventDefault();
        window.open(`https://www.yelp.com/menu/${props.info.alias}`)
       }} >
          <input className="btn btn-default" type="submit" name="submit" value="Menu"/>
        </a>
        <br/><br/>
        <a href="#" onClick={(e) =>{
        e.preventDefault();
        window.open("https://www.doordash.com/en-US")
       }} >
          <input className="btn btn-default" type="submit" name="submit" value="DoorDash"></input>
        </a>
      </form>
    </section>
  )
}
// href={}
export default Restaurant;
import React from 'react';

const Button = (props) => {
  return (
  <form>
    <input className="btn btn-default" type="submit" name="submit" value={props.btnTitle}/>
  </form>
  )
}

export default Button;
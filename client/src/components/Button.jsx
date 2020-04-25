import React from 'react';

const Button = (props) => {
  return (
  <form>
    <input className="btn btn-alt" type="submit" name="submit" value={props.btnTitle} onClick={props.click}/>
  </form>
  )
}

export default Button;
import React from "react";

import Button from "./Button.jsx";

const Random = (props) => {
  return (
    <div className="Random">
      <h2 className="">Pick Random Restaurant:</h2>
      <br />
      <div className="">
        <Button click={props.handleRandomSubmit} btnTitle={"Decide For Me!"} />
      </div>
    </div>
  );
};

export default Random;

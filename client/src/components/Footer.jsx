import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
      <a href="https://github.com/jimwalter/neighborly-eats" target="_blank">
        <h1>Project Repository</h1>
        <p>Github</p>
        <p>Please note that failure to enter a zip code will result in recommendations in Denver, CO</p>
        <p>Neighborly Eats is a project built by Jim Walter using React, Node, and Yelp Fusion</p>
      </a>
    </footer>
  );
};

export default Footer;

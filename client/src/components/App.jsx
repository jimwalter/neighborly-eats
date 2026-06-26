import axios from 'axios';
import React, { useState } from 'react';

import categories from '../../../shared/categories.js';
import Form from './Form.jsx';
import Button from './Button.jsx';
import SectionBreak from './SectionBreak.jsx';
import Recommendations from './Recommendations.jsx';

const App = () => {
  const [zip, setZip] = useState(0);
  const [category, setCategory] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [randomRec, setRandomRec] = useState([]);

  const getRecommendations = () => {
    const options = {
      params: {
        zip: zip || 80211,
        category: category || 'chinese'
      }
    };
    axios.get('/api/getRecommendations', options)
      .then(result => {
        setRecommendations(result.data);
      })
      .catch(err => console.log(err));
  };

  const getRandom = () => {
    const options = {
      params: {
        zip: zip || 80211
      }
    };
    axios.get('/api/getRandom', options)
      .then(result => {
        setRandomRec(result.data);
      })
      .catch(err => console.log(err));
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleCategorySelect = (event) => {
    setCategory(event.target.value);
  };

  const handleRecommendationSubmit = (event) => {
    getRecommendations();
    event.preventDefault();
  };

  const handleRandomSubmit = (event) => {
    getRandom();
    event.preventDefault();
  };

  return (
    <div>
      <div className="hero">
        <h2>NEIGHBORLY EATS</h2>
        <h3>Support Restaurants In Your Neighborhood</h3>
      </div>
      <SectionBreak title={'Enter Your Information'} />
      <section className="row">
        <Form zipChange={handleZipChange} catSelect={handleCategorySelect} categories={categories}/>
        <div className="grid" >
          <Button click={handleRecommendationSubmit} btnTitle={'Find Recommendations!'} />
        </div>
        <br/>
      </section>
      <SectionBreak title={'Our Recommendations'} />
      <section className="row">
        <Recommendations recs={recommendations}/>
      </section>
      <SectionBreak title={'Try Something New - Enter Zip Above & Press Button'} />
      <section className="row-alt-2">
        <h2 className="grid">Pick Random Restaurant:</h2>
        <br />
        <div className="grid">
          <Button click={handleRandomSubmit} btnTitle={'Decide For Me!'} />
        </div>
        <Recommendations recs={randomRec} class={'center-rec'}/>
      </section>
      <section className="footer">
        <a href="https://github.com/jimwalter/neighborly-eats" target="_blank">
          <h1>Project Repository</h1>
          <p>Github</p>
          <p>Please note that failure to enter a zip code will result in recommendations in Denver, CO</p>
          <p>Neighborly Eats is a project built by Jim Walter using React, Node, and Yelp Fusion</p>
        </a>
      </section>
    </div>
  );
};

export default App;

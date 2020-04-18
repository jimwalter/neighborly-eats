import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
import Recommendations from './Recommendations.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      categories: [{name: 'American (New)', num: 0}, {name: 'American (Traditional)', num: 1}, {name: 'Asian Fusion', num: 2}, {name: 'Barbeque', num: 3}, {name: 'Breakfast & Brunch', num: 4}, {name: 'Buffets', num: 5}, {name: 'Burgers', num: 6}, {name: 'Cafes', num: 7}, {name: 'Cajun/Creole', num: 8}, {name: 'Caribbean', num: 9}, {name: 'Cheesesteaks', num: 10}, {name: 'Chicken Wings', num: 11}, {name: 'Chinese', num: 12}, {name: 'Dim Sum', num: 13}, {name: 'Comfort Food', num: 14}, {name: 'Delis', num: 15}, {name: 'Diners', num: 16}, {name: 'Fast Food', num: 17}, {name: 'Fondue', num: 18}, {name: 'Gastropubs', num: 19}, {name: 'Gluten-Free', num: 20}, {name: 'Greek', num: 21}, {name: 'Hot Dogs', num: 22}, {name: 'Indian', num: 23}, {name: 'Italian', num: 24}, {name: 'Ramen', num: 25}, {name: 'Kebab', num: 26}, {name: 'Korean', num: 27}, {name: 'Kosher', num: 28}, {name: 'Mediterranean', num: 29}, {name: 'Mexican', num: 30}, {name: 'Tacos', num: 31}, {name: 'Noodles', num: 32}, {name: 'Pan Asia', num: 33}, {name: 'Pizza', num: 34}, {name: 'Salad', num: 35}, {name: 'Sandwiches', num: 36}, {name: 'Seafood', num: 37}, {name: 'Soul Food', num: 38}, {name: 'Soup', num: 39}, {name: 'Southern', num: 40}, {name: 'Steakhouses', num: 41}, {name: 'Sushi Bars', num: 42}, {name: 'Tapas/Small Plates', num: 43}, {name: 'Thai', num: 44}, {name: 'Turkish', num: 45}, {name: 'Vegan', num: 46}, {name: 'Vegetarian', num: 47}, {name: 'Vietnamese', num: 48}]
    }
  }

  render(props) {
    return(
      <div>
        <div className="hero">
        <h1>NEIGHBORLY EATS</h1>
        <h3>Support Local Restaurants In Your Neightborhood</h3>
        </div>
        <section className="row-alt">
          <div className="lead container"></div>
        </section>
        <section className="row">
          <div className="grid">
            <Form categories={this.state.categories}/>
          </div>
          <br/>
          <section className="row-alt">
          <div className="lead container"></div>
        </section>
        <div className="grid">
          <Recommendations/>

        </div>
        </section>
      </div>
    )
  }
}

export default App;
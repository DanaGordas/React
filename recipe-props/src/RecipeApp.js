import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import Navbar from './Navbar';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          title: "Spaghetti Bolognese",
          ingredients: ["minced meat", "1 celery stick", "1 carrot", "1 glass of wine", "1 medium onion"],
          instructions: "Dice the onion and stir fry it for a few minutes until it turns gold. Add the celery, carrot and meat and let the ingredients mix for a few minutes. Add the wine and let it evaporate for 3-4 minutes. Add water, salt and pepper and cook slowly for 2 hours.",
          img: "spaghetti.jpg"
        }, 
        {
          id: 2,
          title: "Avocado Toast",
          ingredients: ["avocado", "bread", "olive oil", "salt", "pepper"],
          instructions: "Toast the bread and cut the avocado into slices. Place the slices on the bread and pour some olive oil on top. Sprinkle some salt and pepper for taste.",
          img: "avocado-toast.jpg"
        }, 
        {
          id: 3,
          title: "Veggie Burrito",
          ingredients: ["wraps", "black beans", "rice", "lettuce", "avocado"],
          instructions: "Stir fry the onion and black beans with some salt, cumin and pepper. Heat the wraps in the oven, distribute some of the bean mix, rice, lettuce and guacamole in the center and wrap the burrito. Serve with green habañero hot sauce!",
          img: "burrito.jpg"
        }
      ],
      nextRecipeId: 3,
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;

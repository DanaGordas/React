import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [{
            title: "Spaghetti Bolognese",
            ingredients: ["minced meat", "1 celery stick", "1 carrot", "1 glass of wine", "1 medium onion"],
            instructions: "Dice the onion and stir fry it for a few minutes until it turns gold. Add the celery, carrot and meat and let the ingredients mix for a few minutes. Add the wine and let it evaporate for 3-4 minutes. Add water, salt and pepper and cook slowly for 2 hours.",
            img: "spaghetti.jpg"
        }, {
            title: "Avocado Toast",
            ingredients: ["avocado", "bread", "olive oil", "salt", "pepper"],
            instructions: "Toast the bread and cut the avocado into slices. Place the slices on the bread and pour some olive oil on top. Sprinkle some salt and pepper for taste.",
            img: "avocado-toast.jpg"
        }, {
            title: "Veggie Burrito",
            ingredients: ["wraps", "black beans", "rice", "lettuce", "avocado"],
            instructions: "Stir fry the onion and black beans with some salt, cumin and pepper. Heat the wraps in the oven, distribute some of the bean mix, rice, lettuce and guacamole in the center and wrap the burrito. Serve with green habañero hot sauce!",
            img: "burrito.jpg"
        }]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }

    render(){
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} title={r.title} ingredients={r.ingredients}
                    instructions={r.instructions} img={r.img}
            />
        ))
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;
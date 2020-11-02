import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {

    render(){
        const recipes = this.props.recipes.map((r) => (
            <Recipe key={r.id} title={r.title} ingredients={r.ingredients}
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
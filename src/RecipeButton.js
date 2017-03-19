import React, { Component } from 'react';

class RecipeButton extends Component
{
    render() {
        return (
            <div className="recipebutton" onClick={() => this.props.changeRecipeDisplay(this.props.id)}>
                <p>{this.props.recipeName}</p>
            </div>
        )
    }
}


export default RecipeButton
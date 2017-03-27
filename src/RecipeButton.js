import React, { Component } from 'react';

class RecipeButton extends Component
{
    render() {

        if (this.props.id === this.props.currentRecipe) {
            var classname = "recipebutton selected"
        } else {
            var classname = "recipebutton"
        }

        return (
            <div className={classname} onClick={() => this.props.changeRecipeDisplay(this.props.id)}>
                <p>{this.props.recipeName}</p>
            </div>
        )
    }
}


export default RecipeButton
import React, { Component } from 'react';

class RecipeButton extends Component
{
    render() {

        let classname = "recipebutton"

        if (this.props.id === this.props.currentRecipe) {
            classname += " selected"
        } 

        return (
            <div className={classname} onClick={() => this.props.changeRecipeDisplay(this.props.id)}>
                <p>{this.props.recipeName}</p>
            </div>
        )
    }
}


export default RecipeButton
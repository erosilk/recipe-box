import React, { Component } from 'react';

class RecipeForm extends Component
{
    constructor(props){
        super(props);
        this.updateRNText = this.updateRNText.bind(this);
        this.updateRIText = this.updateRIText.bind(this);
        this.state = {
            isEdit: this.props.isEdit,
            recipeNameVal: this.props.recipeName,
            recipeIngredientsVal: this.props.recipeList
        }
    }

    updateRNText(event) {
        this.setState({
            recipeNameVal: event.target.value
        })
    }

    updateRIText(event) {
        this.setState({
            recipeIngredientsVal: event.target.value
        })
    }

    render() {

        let recipeArray = this.state.recipeIngredientsVal.split(",")

        let button = <button onClick={() => this.props.submitRecipe(this.state.recipeNameVal, recipeArray)}>Add</button>

        if (this.state.isEdit) {

            button = <button onClick={() => this.props.modifyRecipe(this.state.recipeNameVal, recipeArray)}>Edit</button>

        }

        return (
            <div className="form-bg">
                <div className="form-container">
                    <h1>Make a recipe</h1>
                    <p>Recipe name:</p><br/>
                    <input type="text" name="recipename" value={this.state.recipeNameVal} onChange={this.updateRNText} />
                    <p>Ingredients:</p><br/>
                    <input type="text" name="recipeingredients" value={this.state.recipeIngredientsVal} onChange={this.updateRIText} /><br/>
                    {button}
                </div>
            </div>
        )
    }
}

export default RecipeForm
import React, { Component } from 'react';
import './RecipeForm.css';

class RecipeForm extends Component
{
    constructor(props){
        super(props);
        this.updateRNText = this.updateRNText.bind(this);
        this.updateRIText = this.updateRIText.bind(this);
        this.labels = {
            "titleEdit": "Edit your recipe",
            "titleAdd": "Make a recipe",
            "emptyError": "You shouldn't leave any textfield empty!",
            "addButton": "Add",
            "editButton": "Edit",
            "recipeName": "Recipe Name:",
            "recipeIngredients": "Ingredients:"

        }
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

        let button = <button onClick={() => this.props.submitRecipe(this.state.recipeNameVal, recipeArray)}>{this.labels.addButton}</button>

        let title = <h1 className="formtitle">{this.labels.titleAdd}</h1>

        let message = <div></div>

        if (this.state.isEdit) {
            button = <button onClick={() => this.props.modifyRecipe(this.state.recipeNameVal, recipeArray)}>{this.labels.editButton}</button>
            title = <h1 className="formtitle">{this.labels.titleEdit}</h1>
        }


        if (this.state.recipeNameVal === "" || this.state.recipeIngredientsVal === "") {
            message = <div className="errormessage">{this.labels.emptyError}</div>
            button = <button>{this.labels.addButton}</button>
            if (this.state.isEdit) {
            button = <button>{this.labels.editButton}</button>
            }
        }

        

        return (
            <div className="form-bg">
                <div className="form-container">
                    {title}
                    <p>{this.labels.recipeName}</p>
                    <input type="text" name="recipename" 
                                       value={this.state.recipeNameVal} 
                                       onChange={this.updateRNText} />

                    <p>{this.labels.recipeIngredients}</p>
                    <input type="text" name="recipeingredients" 
                                       value={this.state.recipeIngredientsVal} 
                                       onChange={this.updateRIText} />
                    <br/>
                    {message}
                    {button}
                </div>
            </div>
        )
    }
}

export default RecipeForm
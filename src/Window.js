import React, { Component } from 'react';
import RecipeButton from './RecipeButton'
import RecipeDisplay from './RecipeDisplay'
import RecipeForm from './RecipeForm'

class Window extends Component
{
    constructor(props)
    {
        super(props)
        this.changeRecipeDisplay = this.changeRecipeDisplay.bind(this);
        this.toggleRecipeForm = this.toggleRecipeForm.bind(this);
        this.submitRecipe = this.submitRecipe.bind(this);
        this.state = {
            isForm: false,
            currentRecipe: 0,
            recipes: [
                {"Frijoles Crudos": ["Frijoles", "Agua", "Sal"]},
                {"Ensalada": ["Tomate", "Lechuga", "Sal", "Vinagre"]},
                {"Papas Fritas": ["Papas", "Aceite"]}
            ]
        }
    }

    changeRecipeDisplay(val) {
        this.setState({
            currentRecipe: val
        })
    }

    toggleRecipeForm() {
        this.setState({
            isForm: !this.state.isForm
        })
    }

    submitRecipe(recipeName, ingredientArray) {

        let newRecipeList = this.state.recipes
        newRecipeList.push({[recipeName]: ingredientArray});

        this.setState({
            recipes: newRecipeList
        })

        this.toggleRecipeForm();

    }



    render() { 
        let RecipeList = this.state.recipes.map((obj) => {
            let ID = this.state.recipes.indexOf(obj);
            return <RecipeButton key={ID} recipeName={Object.keys(obj)[0]} changeRecipeDisplay={this.changeRecipeDisplay} id={ID} />
        }
        );

       
       if (this.state.isForm) {
        return (
        <div>
        <div className="window">
            <div className="header">
                <h1>Recipe Box</h1>
            </div>
            <div className="container">
                <div className="recipelist">
                    {RecipeList}
                    <div className="add" onClick={this.toggleRecipeForm}>add</div>
                </div>
                <div className="currentrecipe">
                    <RecipeDisplay recipe={this.state.recipes[this.state.currentRecipe]} />
                    <div className="edit">edit</div>
                </div>
            </div>
        </div>
        <RecipeForm submitRecipe={this.submitRecipe} recipeName="" recipeList=""/>
        </div>
        )
       } else {
        return(
        <div className="window">
            <div className="header">
                <h1>Recipe Box</h1>
            </div>
            <div className="container">
                <div className="recipelist">
                    {RecipeList}
                    <div className="add" onClick={this.toggleRecipeForm}>add</div>
                </div>
                <div className="currentrecipe">
                    <RecipeDisplay recipe={this.state.recipes[this.state.currentRecipe]} />
                    <div className="edit">edit</div>
                </div>
            </div>
        </div>
        )
       }

        
    }


}

export default Window
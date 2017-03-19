import React, { Component } from 'react';
import RecipeButton from './RecipeButton'
import RecipeDisplay from './RecipeDisplay'

class Window extends Component
{
    constructor(props)
    {
        super(props)
        this.changeRecipeDisplay = this.changeRecipeDisplay.bind(this);
        this.state = {
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


    render() { 
        let RecipeList = this.state.recipes.map((obj) => {
            let ID = this.state.recipes.indexOf(obj);
            return <RecipeButton key={ID} recipeName={Object.keys(obj)[0]} changeRecipeDisplay={this.changeRecipeDisplay} id={ID} />
        }
        );

        return (
        <div className="window">
            <div className="header">
                <h1>Recipe Box</h1>
            </div>
            <div className="container">
                <div className="recipelist">
                    {RecipeList}
                    <div className="add">add</div>
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

export default Window
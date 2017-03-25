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
        this.editRecipe = this.editRecipe.bind(this);
        this.modifyRecipe = this.modifyRecipe.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.state = {
            isForm: false,
            isEdit: false,
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

    editRecipe() {
        this.setState({
            isEdit: !this.state.isEdit
        });
        this.toggleRecipeForm();
    }

    modifyRecipe(recipeName, ingredientArray) {

        let newRecipeList = this.state.recipes
        newRecipeList.splice(this.state.currentRecipe, 1, {[recipeName]: ingredientArray});

        this.setState({
            recipes: newRecipeList,
            isEdit: false
        })

        this.toggleRecipeForm();

    }

    submitRecipe(recipeName, ingredientArray) {

        let newRecipeList = this.state.recipes
        newRecipeList.push({[recipeName]: ingredientArray});

        this.setState({
            recipes: newRecipeList
        })

        if (this.state.currentRecipe < 0) {
            this.setState({
                currentRecipe: 0
            })
        }

        this.toggleRecipeForm();

    }

    deleteRecipe() {


        if (this.state.currentRecipe === this.state.recipes.length-1) {
            this.setState({
                currentRecipe: Number(this.state.currentRecipe)-1
            })
        }

        let newRecipeList = this.state.recipes
        newRecipeList.splice(this.state.currentRecipe, 1);


        this.setState({
            recipes: newRecipeList,
        })

        

    }



    render() { 
        let RecipeList = this.state.recipes.map((obj) => {
            let ID = this.state.recipes.indexOf(obj);
            return <RecipeButton key={ID} 
                                 recipeName={Object.keys(obj)[0]}
                                 changeRecipeDisplay={this.changeRecipeDisplay} 
                                 id={ID} />
        }
        );

        let recipeForm = <div></div>;

        if (this.state.isForm){
            recipeForm = <RecipeForm submitRecipe={this.submitRecipe} 
                                     modifyRecipe={this.modifyRecipe}
                                     recipeName="" 
                                     recipeList=""
                                     isEdit={false}/>


            if (this.state.isEdit) {
                let ingredientArray = this.state.recipes[this.state.currentRecipe][Object.keys(this.state.recipes[this.state.currentRecipe])[0]];

                let ingredientString = ingredientArray.join();
                recipeForm = <RecipeForm submitRecipe={this.submitRecipe} 
                                         modifyRecipe={this.modifyRecipe}
                                         recipeName={Object.keys(this.state.recipes[this.state.currentRecipe])[0]} 
                                         recipeList={ingredientString}
                                         isEdit={true}/>
            }
        }

        let recipeList = <RecipeDisplay recipe={this.state.recipes[this.state.currentRecipe]} />

        
        
        

        let currentRecipeButtons = <div><div className="edit" onClick={this.editRecipe}>edit</div>
                                    <div className="delete" onClick={this.deleteRecipe}>delete</div>
                                    </div>
       

        if (this.state.recipes.length === 0) {
            recipeList = <div className="recipedisplay">
                            <h1 className="recipedisplaytitle">There are no recipes!</h1>
                         </div>
            currentRecipeButtons = <div></div>
        }

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
                    {recipeList}
                    {currentRecipeButtons}
                </div>
            </div>
        </div>
        {recipeForm}
        </div>
        )
       
    }

}

export default Window
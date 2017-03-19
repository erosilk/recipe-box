import React, { Component } from 'react';

class RecipeDiplay extends Component {

    render() {
        
        let recipeName = Object.keys(this.props.recipe)[0];
        let recipeItemList = this.props.recipe[recipeName].map((item) => <li key={this.props.recipe[recipeName].indexOf(item)}>{item}</li>);
        return(
        <div className="recipedisplay">
            <h1 className="recipedisplaytitle">{recipeName}</h1>
            <ul>{recipeItemList}</ul>
        </div>
        )
    }
}

export default RecipeDiplay;
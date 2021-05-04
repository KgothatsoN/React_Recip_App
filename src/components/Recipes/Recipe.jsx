import React from 'react';
import CSS from '../Recipes/Recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) =>   {
    return (
        <div className={CSS.card}>
            <div className={CSS.recipe}>
                <h1>{title}</h1>
                <ul>
                    {ingredients.map(ingredient => (<li key={Math.random(calories)}>{ingredient.text}</li>))}
                </ul>
                <p className={CSS.calories}>Calories: {calories}</p>
                <img src={image} alt="image" className={CSS.image} />
            </div>
        </div>
        
    )
}

export default Recipe;
import Practice from "./Practice";
import React, { useEffect, useState } from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
   const [recipeShown, setRecipeShown] = useState(false);

    const ingredientsListItems = ingredients.map(ingredient => {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    useEffect(() => {console.log(ingredients)}, [ingredients])

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const newIngredient = data.ingredient;

        setIngredients(prevState => [...prevState, newIngredient]);

        document.querySelector('input[name="ingredient"').value = "";
    }

    function handleRecipeShown() {
        setRecipeShown(prevState => prevState = true);
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
            { ingredients.length > 0 && 
            <IngredientList 
            ingredients = {ingredients} 
            items = {ingredientsListItems}
            handleRecipeShown = {handleRecipeShown}
            />
            }
            { recipeShown && <ClaudeRecipe />}
        </main>
    )
}
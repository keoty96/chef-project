import Practice from "./Practice";
import React, { useEffect, useState } from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";
import {getRecipeFromMistral} from "../ai";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
   const [recipe, setRecipe] = useState("");

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

    async function getRecipe() {
        const result = await getRecipeFromMistral(ingredients);
        setRecipe(result);
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
            getRecipe = {getRecipe}
            />
            }
            { recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}
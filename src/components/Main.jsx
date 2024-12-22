import Practice from "./Practice";
import React, { useEffect, useState } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(ingredient => {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    useEffect(() => {console.log(ingredients)}, [ingredients])

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient")

        setIngredients(prevState => [...prevState, newIngredient]);

        document.querySelector('input[name="ingredient"').value = "";
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
            <ul>
            {ingredientsListItems}
            </ul>
        </main>
    )
}
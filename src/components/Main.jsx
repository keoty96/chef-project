export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredient => {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient);
        console.log(ingredients)
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
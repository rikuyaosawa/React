import { useState } from "react";

function Main() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);

    const ingredientItems = ingredients.map((item) => {
        return <li key={item}>{item}</li>;
    });

    function log(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const ingredient = formData.get("ingredient");
        if (ingredient !== null) {
            ingredients.push(ingredient.toString());
            setIngredients(ingredients);
        }
        console.log(ingredients);
    }

    return (
        <main>
            <form onSubmit={log}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredients"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            <div className="ingredientList">
                <h1>Ingredients to use:</h1>
                <ul>{ingredientItems}</ul>
            </div>
            <div className="callout">
                <div className="content">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
            </div>
        </main>
    );
}

export default Main;

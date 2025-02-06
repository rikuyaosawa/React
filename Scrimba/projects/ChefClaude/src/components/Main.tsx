import { useState, type FormEvent } from "react";

function Main() {
    const [ingredients, setIngredients] = useState<string[]>([]);

    const ingredientItems = ingredients.map((item) => {
        return <li key={item}>{item}</li>;
    });

    function updateIngredients(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const ingredient = formData.get("ingredient") as string | null;

        if (ingredient !== null) {
            const trimmed = ingredient.trim();
            if (trimmed !== "") {
                setIngredients((prev) => [...prev, trimmed]);
            }
        }

        console.log(ingredients);
    }

    return (
        <main>
            <form onSubmit={updateIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredients"
                    name="ingredient"
                    required
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

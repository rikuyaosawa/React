import { useState } from "react";

function Main() {
    const [ingredients, setIngredients] = useState<string[]>([]);

    const ingredientItems = ingredients.map((item) => {
        return <li key={item}>{item}</li>;
    });

    const callout = (
        <div className="callout">
            <div className="content">
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
        </div>
    );

    const ingredientList = (
        <section>
            <div className="ingredientList">
                <h1>Ingredients to use:</h1>
                {ingredients.length < 4 ? (
                    <p>※let's add at least {4 - ingredients.length} more ingredients 🍴</p>
                ) : null}
                <ul>{ingredientItems}</ul>
            </div>
            {ingredients.length > 3 ? callout : null}
        </section>
    );

    function updateIngredients(formData: FormData) {
        const ingredient = formData.get("ingredient") as string | null;

        if (ingredient !== null && !ingredients.includes(ingredient)) {
            const trimmed = ingredient.trim();
            if (trimmed !== "") {
                setIngredients((prev) => [...prev, trimmed]);
            }
        }
    }

    return (
        <main>
            <form action={updateIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredients"
                    name="ingredient"
                    required
                    autoFocus
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length !== 0 ? ingredientList : null}
        </main>
    );
}

export default Main;

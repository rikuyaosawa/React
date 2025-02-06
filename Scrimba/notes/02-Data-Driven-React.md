# Data Driven React

Table of Contents

- [Data Driven React](#data-driven-react)
  - [Overview](#overview)
  - [JS Inside JSX](#js-inside-jsx)
  - [Passing Data Through Props](#passing-data-through-props)
    - [Using `Array.prototype.map()`](#using-arrayprototypemap)
    - [Key Props](#key-props)
    - [Spread Object as Props](#spread-object-as-props)

## Overview

"Data-driven" in React means building components and applications where the UI is a reflection of the underlying data. Instead of manually updating the UI, React relies on its declarative nature: when the data changes, the UI automatically updates to reflect those changes.

Take a look at this screenshot of [IMDB website](https://www.imdb.com/):

![IMBD website example](<https://www.lifewire.com/thmb/RbocY4XParI3QFD_eaqFBRU-SeY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/imdb-what-to-watch-d3c2befe37d04ac5b2e22696464a13eb.png>)

React's data-driven approach emphasizes focusing on managing data, while React handles rendering the UI to match that data.

## JS Inside JSX

In JSX, JavaScript can be written directly inside curly braces `{}`. This allows you to dynamically insert values, expressions, or logic into your React components.

```jsx
const name = "Rikuya";
return <h1>Hello, {name}!</h1>; // output: Hello, Rikuya!
```

Key Points

1. Expressions Only

   You can write any valid JavaScript expression (e.g., variables, function calls, ternary operators) inside `{}`, but not statements like `if` or `for`.

   ```jsx
   const name = "Rikuya";
   return <h1>Hello, {name}!</h1>;
   ```

2. Embedding Logic

   Use conditional rendering with ternary operators or logical operators:

   ```jsx
   const isLoggedIn = true;
   return <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
   ```

3. Calling Functions

   You can invoke JavaScript functions within JSX:

   ```jsx
   function greet() {
     return "Hello, world!";
   }
   return <h1>{greet()}</h1>;
   ```

4. Inline Styling

   Pass JavaScript objects for dynamic styling:

   ```jsx
   const style = { color: "blue", fontSize: "20px" };
   return <h1 style={style}>Styled Text</h1>;
   ```

## Passing Data Through Props

**Props** (short for "properties") are a way to pass data from a parent component to a child component in React. They are used to make components reusable and dynamic by customizing the behavior or content of a component based on the data provided.

Key Features of Props

- **Read-Only**: Props are immutable, meaning a child component cannot modify the props it receives. They are strictly for reading data passed from the parent.

- **Passed as Attributes**: Props are passed to a component as attributes in the JSX tag.

- **Accessed via props Object**: Inside a component, props can be accessed using props (or destructured for convenience).

- **Unidirectional Data Flow**: Data flows in one direction: from parent to child.

Example:

```jsx
function App() {
  return <Greeting name="Rikuya" />;
}

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

```jsx
// props destructuring
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

```jsx
// default props
function Button({ label = "Click Me" }) {
  return <button>{label}</button>;
}
```

### Using `Array.prototype.map()`

`Array.prototype.map()` is a method in JavaScript that is often used to transform arrays by applying a callback function to each element of the array and returning a new array with the results.

In React, it can be used to **convert an array of raw data into an array of JSX elements that can be rendered on the page**.

Example:

```jsx
const App = () => {
  const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default App;
```

### Key Props

Whenever you're rendering an array of React elements, each one must have a **unique key prop**.

```jsx
<li key="{item.id}">{item.value}</li>
```

This is because React uses the key to identify each element in the virtual DOM and efficiently update the UI when the array changes.

> [!WARNING]
>
> If you don't provide a key prop, React will fall back to **using the index of the element in the array** as the key. However, using the index as a key in such scenarios can lead to performance issues and subtle UI bugs (e.g., animations breaking, input fields losing focus).

### Spread Object as Props

```jsx
const entryElements = data.map((entry) => {
  return <Entry key={entry.id} {...entry} />;
});
```

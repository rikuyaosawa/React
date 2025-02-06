# Static Pages

Table of Contents

- [Static Pages](#static-pages)
  - [First React Code](#first-react-code)
  - [React.createElement()](#reactcreateelement)
  - [JSX](#jsx)
  - [Why choose React?](#why-choose-react)
    - [Composable](#composable)
    - [Declarative](#declarative)
  - [Components](#components)
    - [Fragments](#fragments)
    - [Parent/Child Component](#parentchild-component)
    - [Styling with Classes](#styling-with-classes)
  - [Component as Module](#component-as-module)
- [Pop Quiz](#pop-quiz)

## First React Code

JSX:

```jsx
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<h1>Hello, React!</h1>);
```

HTML:

```html
<body>
  <div id="root"></div>
</body>
```

`createRoot(domNode, options?)` lets you create a root to display React components inside a browser DOM node.

## React.createElement()

In the early days of React, they created a function called `createElement` which returns a regular JavaScript object with specific structure that makes sense to React.

JS:

```js
import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const reactElement = createElement("h1", null, "Hello from createElement!");

console.log(reactElement); // returns regular JS object

root.render(reactElement);
```

Console:

```js
{type: 'h1', key: null, props: {children: 'Hello from createElement!'}, _owner: null, _store: {}}
```

This code might not look that complicated, but once nested, things get difficult real quick.
And React team realized that, and created something different called **`JSX`**, which is the
first code you wrote earlier with the HTML looking syntax.

## JSX

JSX is simply what we call syntactic sugar on top of the `createElement` call. Under the hood, React is taking the JSX syntax and turning into calls to `createElement`.

```jsx
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const reactElement = <h1>Hello from JSX!</h1>;

console.log(reactElement);

root.render(reactElement);
```

## Why choose React?

- Highest job demand
- Largest ecosystem/community
- Less "magic"
- Composable/Declarative
- Active development

### Composable

React allows you to build complex user interfaces by combining smaller, reusable pieces called **components**. Its composability makes it easier to maintain and scale applications by encouraging the reuse of well-defined, modular pieces.

### Declarative

React is **declarative** because you describe what you want the UI to look like at any given time, and React takes care of managing the underlying updates to reflect that state. You don’t need to imperatively manipulate the DOM; instead, you define the desired outcome, and React ensures the UI matches that state.

Here is a comparison between declarative and imperative:

Declarative ("What should be done"):

```jsx
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<h1>Hello, React!</h1>);
```

Imperative ("How should it be done"):

```js
const h1 = document.createElement("h1");
h1.textContent = "Hello, React!";
document.getElementById("root").appendChild(h1);
```

## Components

**Components** are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Example of function component:

```jsx
function Page() {
  return (
    <ol>
      <li>React is a popular library </li>
      <li>I am more likely to get a job</li>
    </ol>
  );
}

root.render(<Page />);
```

Notice we use **Pascal Case** to name the component function.

### Fragments

**React Fragments** are a lightweight way to group multiple elements without adding an extra DOM node. They let you return multiple elements from a component or render function without wrapping them in a parent container like a `<div>`.

You can import them or directly type in like the following:

```jsx
return (
  <React.Fragment>
    <h1>Title</h1>
    <p>This is a description.</p>
  </React.Fragment>
);
```

But there is a shorter and cleaner syntax using empty angle brackets:

```jsx
return (
  <>
    <h1>Title</h1>
    <p>This is a description.</p>
  </>
);
```

### Parent/Child Component

The function component `Page` is in this case the **"parent"** comnponent that has three separate **"child"** components. In a larger React app, this continues down the tree.

```jsx
function Page() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
```

### Styling with Classes

JSX uses `className` to set class for styling a component.

The reason for that is because the DOM uses `className` syntax and JSX accesses the native DOM properties under the hood.

```jsx
<nav>
  <ul className="nav-list">
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

## Component as Module

It is pretty straightforward if you know how modules work in JavaScript.

```jsx
function MyComponent() {
    return (
        // ...
    );
}

export default MyComponent;
```

And import it where you want to use the module.

```jsx
import MyComponent from "./MyComponent";
```

# Pop Quiz

1.  Where does React put all of the elements I create in JSX when I
    call `root.render()`?
    <details><summary>Answer</summary>All the elements I render get put inside the div with the id of "root" (or whatever other element I might select when calling createRoot)</details>
    <br />

2.  What would show up in my console if I were to run this line of code:

    ```jsx
    console.log(<h1>Hello world!</h1>);
    ```

    <details><summary>Answer</summary>An object! Unlike creating an HTML element in vanilla DOM JS, what gets created from the JSX we have in our React code is a plain JS object that React will use to fill in the view.</details>
    <br />

3.  What's wrong with this code:

    ```jsx
    root.render(
        <h1>Hi there</h1>
        <p>This is my website!</p>
    );
    ```

    <details><summary>Answer</summary>You can only render 1 parent element at a time. That parent element can have as many children elements as you want.</details>
    <br />

4.  What does it mean for something to be "declarative" instead of "imperative"?

    <details><summary>Answer</summary>_Imperative_ means we need to give specific step-by-step instructions on how to accomplish a task.  _Declarative_ means we can write our code to simply "describe" _what_ should show up on the page and allow the rool (React, e.g.) to handle the details on _how_ to put those things on the page.</details>
    <br />

5.  What does it mean for something to be "composable"?

    <details><summary>Answer</summary>We have small pieces that we can put together to make something larger or greater than the individual pieces themselves.</details>
    <br />

6.  What is a React component?

    <details><summary>Answer</summary>A reusable bit of code that returns React elements. (UI)</details>
    <br />

7.  What's wrong with this code?

    ```jsx
    function myComponent() {
      return <small>I'm tiny text!</small>;
    }
    ```

    <details><summary>Answer</summary>The function name is not in pascal case.</details>
    <br />

8.  What's wrong with this code?

    ```jsx
    function Header() {
      return (
        <header>
          <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
      );
    }

    root.render(Header());
    ```

    <details><summary>Answer</summary>The Header component should be called using angle brackets.</details>
    <br />

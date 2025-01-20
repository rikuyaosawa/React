# Static Pages

Table of Contents

- [Static Pages](#static-pages)
  - [First React Code](#first-react-code)
  - [React.createElement()](#reactcreateelement)
  - [JSX](#jsx)
  - [Why choose React?](#why-choose-react)
    - [Composable](#composable)
    - [Declarative](#declarative)

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

In the early days of React, they created a function called `createElement` which returns
a regular JavaScript object with specific structure that makes sense to React.

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

JSX is simply what we call syntactic sugar on top of the `createElement` call.
Under the hood, React is taking the JSX syntax and turning into calls to `createElement`.

```jsx
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const reactElement = <h1>Hello from JSX!</h1>;

console.log(reactElement);

root.render(reactElement);
```

## Why choose React?

-   Highest job demand
-   Largest ecosystem/community
-   Less "magic"
-   Composable/Declarative
-   Active development

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

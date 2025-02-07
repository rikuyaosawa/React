# React State

Table of Contents

- [React State](#react-state)
  - [Overview](#overview)
  - [Responding to Events](#responding-to-events)
  - [`useState`](#usestate)
  - [`<form>`](#form)
  - [Pop Quiz](#pop-quiz)

## Overview

If props is being referred to as being passed into a component for it to work properly, and immutable, **state**, on the other hand, refers to values that are managed by the component itself.

![Props vs. State](https://i.sstatic.net/wqvF2.png)

## Responding to Events

React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

Example:

```jsx
export default function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

You defined the handleClick function and then passed it as a prop to `<button>`. handleClick is an event handler. Event handler functions:

Functions passed to event handlers must be passed, not called.

```jsx
// correct
<button onClick={() => alert('You clicked me!')}>
```

```jsx
// incorrect
<button onClick={alert('...')}>
```

> <small>[More on React event object ↗](https://react.dev/reference/react-dom/components/common#react-event-object)</small>

> [!TIP]Using Event Object with TypeScript
>
> ```tsx
> function log(event: React.FormEvent<HTMLFormElement>) {
>   event.preventDefault();
>   alert("Submitted");
> }
> ```

## `useState`

Call `useState` at the top level of your component to declare a state variable.

> <small>[Go check React doc on `useState` ↗](https://react.dev/reference/react/useState#reference)</small>

Syntax:

```jsx
useState(initialState);
```

Example Usage:

```jsx
import { useState } from "react";

function MyComponent() {
  const [age, setAge] = useState(28);
  // ...
}
```

The convention is to name state variables like `[something, setSomething]` using [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Parameters:

- `initialState`: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.

Returns:

`useState` returns an array with exactly two values:

1.  The current state. During the first render, it will match the initialState you have passed.
2.  The set function that lets you update the state to a different value and trigger a re-render.

`useState` is a Hook (more on Hooks later), so **you can only call it at the top level of your component or your own Hooks**. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.

> [!IMPORTANT]
>
> **Calling the set function does not change the current state in the already executing code.** It only affects what useState will return starting from the next render.

Passing the next state directly:

```jsx
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}
```

Instead, you may pass **an updater function**:

```jsx
function handleClick() {
  setAge((prevAge) => prevAge + 1); // setAge(42 => 43)
  setAge((prevAge) => prevAge + 1); // setAge(43 => 44)
  setAge((prevAge) => prevAge + 1); // setAge(44 => 45)
}
```

By convention, it’s common to name the pending state argument for the first letter of the state variable name, like a for age. However, you may also call it like `prevAge` or something else that you find clearer.

> <small>[Updating state based on the previous state ↗](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)</small>

## `<form>`

React 19 introduced `action` props for the form. It's a significant improvement for handling form submissions, especially in server-side rendering (SSR) environments and for progressive enhancement. Let's break down what it does and why it's important.

**The Problem with Traditional Form Handling**

Before React 19 and the `action` prop, handling form submissions in React often involved a few less-than-ideal approaches:

1. **`onSubmit` Handler:** You'd typically use the `onSubmit` event handler on the `<form>` element. Inside this handler, you'd prevent the default form submission behavior (which would cause a full page reload) and then use JavaScript (e.g., `fetch` or `axios`) to send the form data to the server.

2. **Server-Side Rendering Challenges:** In SSR, this approach can be problematic. The server might need to know the form's `action` URL _before_ the JavaScript hydrates on the client. This makes it harder to do things like prefetching data or optimizing server-side logic related to the form submission.

3. **Progressive Enhancement:** If JavaScript is disabled or fails to load, the form wouldn't work at all. Traditional React form handling often relies entirely on JavaScript.

**The Solution: The `action` Prop**

The `action` prop on the `<form>` element solves these problems by allowing you to specify the form's submission URL directly in the HTML. This is a return to more traditional web form handling, but with the added benefits of React.

**How it Works:**

1. **HTML `action` Attribute:** The `action` prop is analogous to the `action` attribute in standard HTML forms. You set it to the URL where you want the form data to be submitted.

2. **Enhanced SSR:** Because the `action` is available in the HTML, server-side rendering frameworks can use it to optimize the rendering process. They can prefetch data, pre-render related components, or perform other server-side actions related to the form submission.

3. **Progressive Enhancement:** If JavaScript is disabled, the form will still submit to the URL specified in the `action` prop, just like a traditional HTML form. This provides a fallback and ensures that the form is still functional even without JavaScript.

4. **React Integration:** When JavaScript _is_ enabled, you can still use the `onSubmit` handler for more complex form handling logic (e.g., validation, asynchronous submission, updating UI feedback). React's form handling complements the `action` prop, providing a more robust and flexible approach.

**Example**

```tsx
export default function Search() {
  // form data is directly passed instead of passing even object
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
  return (
    <form action={search}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
```

## Pop Quiz

1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

   <details><summary>Answer</summary>

   1. Pass the new version of state that we want to use as the replacement for the old version of state.
   2. Pass a callback function. Must return what we want the new value of state to be. Will receive the old version of state as a parameter so we can use it to help determine what we want the new value of state to be.

   </details>
   <br />

2. When would you want to pass the first option (from answer
   above) to the state setter function?

   <details><summary>Answer</summary>

   Whenever we don't really care about (or need) the old value, we simply want to set a new value.

   </details>
   <br />

3. When would you want to pass the second option (from answer
   above) to the state setter function?

   <details><summary>Answer</summary>

   Whenever we do care about the previous value in state and need
   it to help us determine what the new value should be.

   <details>
   <br />

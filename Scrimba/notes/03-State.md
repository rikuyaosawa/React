# React State

Table of Contents

- [React State](#react-state)
  - [Overview](#overview)
  - [Responding to Events](#responding-to-events)
  - [`useState`](#usestate)

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

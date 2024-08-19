---
slug: hooks-getters
date: 07-14-2024
title: A react pattern for writing hooks
summary: Pattern that ensures efficient rendering by re-rendering components only when the specific state values they use change
published: true
---

In my journey with React, I've come across a powerful pattern known as the hook getter pattern. This approach, utilized by popular libraries like <a href="https://github.com/vercel/swr/blob/1585a3e37d90ad0df8097b099db38f1afb43c95d/src/core/use-swr.ts#L733" target="_blank">SWR</a> and <a href="https://github.com/react-hook-form/react-hook-form/blob/5e92c1b5634bbcf18e3df14d173bced620f7392d/src/logic/getProxyFormState.ts#L16" target="_blank">react-hook-form</a>, embodies a fundamental React principle: render only what changes.

Let's explore this pattern by evolving a simple localStorage wrapper into a more sophisticated hook.
We'll start with a basic implementation:

```ts
function useLocalStorage() {
  return {
    get: (key) => window.localStorage.getItem(key),
    set: (key, value) => window.localStorage.setItem(key, value),
  };
}
```

While functional, this hook doesn't leverage React's re-rendering capabilities. How can we make it re-render components when specific localStorage values change?
The answer lies in using Proxy and React refs.

#### Core idea

- Maintain state outside of React's render cycle
- Use a proxy to detect which keys are accessed
- Listen for storage events to identify changes

Our goal is to create a hook that allows for elegant usage like this:

```tsx
function ThemeProvider({ children }) {
  const { theme } = useLocalStorage();

  return <div style={{ "--theme": theme }}>{children}</div>;
}
```

Let's build our enhanced hook step by step:

```ts
function useLocalStorage() {
  const render = useState()[1];
  const state = useRef({});
  const deps = useRef({});

  useLayoutEffect(() => {
    window.addEventListener("storage", (event) => {
      if (event.storageArea === localStorage && deps.current[event.key]) {
        state.current[event.key] = event.newValue;
        render({});
      }
    });
  }, []);

  return useMemo(
    () =>
      new Proxy(
        {},
        {
          get(_, property) {
            deps.current[property] = true;
            return state.current[property];
          },
        }
      ),
    []
  );
}
```

Let's break down the key components:

1. `state` stores our values, synced with localStorage.
2. `deps` tracks which values are currently in use.
3. `render` is a function to trigger a React re-render.
4. We use a memoized `Proxy` to detect property access and mark dependencies.
5. A `useLayoutEffect` sets up a listener for storage events, updating state and triggering re-renders only for tracked properties.

This implementation creates an efficient state synchronization mechanism. When you destructure properties from the hook's return value, it automatically listens for changes in localStorage for those specific keys.

By leveraging this pattern, you ensure that your components only re-render when the specific data they use changes, leading to more efficient and responsive React applications.

### Key Principles

To summarize, the hook getter pattern generally follows these principles:

- Keep state outside of the render cycle
- Synchronize state, update tracked dependencies, and trigger renders
- Return getters for known properties or use a Proxy

These principles allow for fine-grained control over when and why your components re-render, helping to optimize performance in React applications.

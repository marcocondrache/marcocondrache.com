---
title: A react pattern for writting hooks
slug: hooks-getters
published: true
---

One thing that I've learned during my experience with React is the hook getters pattern.

It's a pattern used by libraries like <a href="https://github.com/vercel/swr/blob/1585a3e37d90ad0df8097b099db38f1afb43c95d/src/core/use-swr.ts#L733" target="_blank">swr</a> and <a href="https://github.com/react-hook-form/react-hook-form/blob/5e92c1b5634bbcf18e3df14d173bced620f7392d/src/logic/getProxyFormState.ts#L16" target="_blank">react-hook-form</a>, and it states a basic idea of React. Don't render what is not used.

Take this example

```ts
function useLocalStorage() {
  return {
    get: (key) => window.localStorage.getItem(key),
    set: (key, value) => window.localStorage.setItem(key, value),
  };
}
```

This is just a basic wrapper on window's localStorage functions. Can we make something more advanced?

How can we subscribe to re-render everytime the value of a key changes?

We can use `Proxy` and some React refs.

### Implementation

This is the main idea:

- Keep state outside of render state
- Return a proxy to detect which keys are used
- Listen to storage events to detect changes

What we want to achieve is something like this

```tsx
function ThemeProvider({ children }) {
  const { theme } = useLocalStorage();

  return <div style={{ "--theme": theme }}>{children}</div>;
}
```

Let's create our hook

```ts
function useLocalStorage() {
  const render = useState()[1];
  const state = useRef({});
  const deps = useRef({});

  /* ... */
}
```

`state` will keep our values (syncronized with the storage), `deps` will track which values we are currently using and `render` is a function to force a react re-render.

Now, let's use a proxy to understand which props we are using.

```ts
function useLocalStorage() {
  const render = useState()[1];
  const state = useRef({});
  const deps = useRef({});

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

Note how our proxy is memoized. We don't need to recreate it every time. The getter will define which properties we are listening to!

Let's add now the listener.

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

For each storage event, we will update the state only for those that are actually used by the hook and trigger the render after the update.

And that's it! For each destructured property we will listen for changes inside localStorage. Creating a nice and safe state syncronization.

This is still a basic example, this pattern can be applied to more complex states and cases.

---

1. Some of the code takes inspiration from the external store of React ([link](https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js))

# <a href="https://bk-cake-shop-react-rtk-ts.netlify.app/" target="_blank">BK-Cake-Shop</a>

This SPA was build using React + Typescript. This project shows demonstrate Redux-Toolkit for centralized state management. The webapp is deployed on `Netlify` platform

RTK is provides predictable state container, which uses a single store to manage all state of all the components.

---

It uses 3 powerful concepts.

1. Store - It's an CakeShop for this example; we sell cake and ice-cream.
2. Action - The customer can "order" a cake or an icecream, where "order" is an action.
3. Reducer - The shopkeeper, based on the action, they prepare the order, generate a recipt, update the stock of cake and icecream

The react uses `react-redux` library to work as a bridge between two powerful libraries.

-   The `useSelector` hook is used to get the data from the current state to render on the component
-   The `useDispatch` hook is used to dispatch an action on the store

---

## To accomodate both these hooks w/ TypeScript; we need to create custom hooks

1. In the store export typed constants `AppDispatcher` and `RootState`  
   `export const RootState = RootState<tyoeof store.getstate>;`
   `export const AppDispatch = typeof store.dispatch;`

2. In the `hook.ts` file, create two hooks `useAppSelector` and `useAppDispatcher`

-   `TypedUseSelectorHook` which converts the `useSelector` hook to work with the `type` of the state  
    `export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;`

-   Similarly for the
    ` export const useAppDispatcher = () => useDispatch<AppDispatch>();`

---

Next, in the views, we can use the custom hooks that we created, to get the state, and dispatch an action to interact with UI

-   `CakeView`

    -   has `useAppSelector` hook that get the state `numberOfCakes` which can be displayed to the UI
    -   has `useAppDispatch` hook that performs `ordered` or `restocked` actions based on the interaction with the UI; and update the `numberOfCakes`;

-   Same logic is used for the icecream

-   Since we have, an offer, for each order an ice-cream is free, everytime a cake is ordered; ice-cream count is reduced by 1. This action is peformed using `extraRecuers` in the `icecreamSlice`

## Async actions to fetch the data from external APIs - userSlice;

-   The `fetchUsers` action uses `createAsyncThunk` which acts as a middleware (alternative of redux-thunk) allows us to peform async operation of data fetching
-   To fetch the data from the external API, `axios` is used to perform `get` request and the response is returned
-   The `fetchUsers` function can have a state of the promise [pending, fulfilled, or rejected]
-   `userSlice` uses `extraReducers` - which is a function that takes `build` as parameter, and returns some additional actions that needs to be performed
-   based on pending, fulfilled, rejected action-type on fetchUsers, it updates the state accordingly
-   Finally, the list of users is shown as the cutomers to the shop in `userView` which based on the action types shows the customer list

---

<br/>
<br/>
<br/>
<br/>
Rest of the part is generated by - Vite - tool - that was used to create the react project

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
    // Set the react version
    settings: { react: { version: "18.3" } },
    plugins: {
        // Add the react plugin
        react,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules,
    },
});
```

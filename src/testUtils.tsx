// test-utils.js
import React from "react";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
// Import your own reducer
import { rootReducer } from "store/reducer";

type renderProps = {
  initialState?: object;
  store?: ReturnType<typeof createStore>;
} & RenderOptions;

function render(
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  }: renderProps = {}
) {
  return rtlRender(ui, {
    wrapper: ({ children }: { children?: React.ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    ),
    ...renderOptions,
  });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { store } from "store";

import App from "./App";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render } from "./testUtils";

it("Renders the app with store", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    { store }
  );
});

import { store } from "store";
import { render } from "testUtils";

import FrontPage from "../FrontPage";

describe("Page Component: Front Page", () => {
  it("should render by default", () => {
    const component = render(<FrontPage />);

    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correct store data", () => {
    const component = render(<FrontPage />, { store });

    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });
});

import { store } from "store";
import { render } from "testUtils";

import FilmCard from "../FilmCard";

describe("Shared Component: Film Card", () => {
  it("should render by default", () => {
    const component = render(<FilmCard id="1" />);

    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correct store data", () => {
    const component = render(<FilmCard id="1" />, { store });

    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });
});

import { store } from "store";
import { render } from "testUtils";

import PeopleTable from "../PeopleTable";

describe("View Component: PeopleTable", () => {
  const scrollToPersonDetail = jest.fn();

  it("should render by default", () => {
    const component = render(
      <PeopleTable scrollToPersonDetail={scrollToPersonDetail} />
    );

    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correct store data", () => {
    const component = render(
      <PeopleTable scrollToPersonDetail={scrollToPersonDetail} />,
      { store }
    );

    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });
});

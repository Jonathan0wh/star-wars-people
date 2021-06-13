import { store } from "store";
import { render } from "testUtils";

import PersonDetail from "../PersonDetail";

describe("View Component: PersonDetail", () => {
  const ref: React.Ref<HTMLDivElement> = {
    current: null,
  };

  it("should render by default", () => {
    const component = render(<PersonDetail sectionRef={ref} />);

    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correct store data", () => {
    const component = render(<PersonDetail sectionRef={ref} />, { store });

    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  });
});

import * as React from "react";
import { render } from "@testing-library/react";
import Stream from ".";
import defaultData from "../StreamFilter/defaultData";

describe("Stream", () => {
  it("should match the snapshot", () => {
    expect(
      render(<Stream />).container.firstChild
    ).toMatchSnapshot();
  });
});

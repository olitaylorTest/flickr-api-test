import * as React from "react";
import { render } from "@testing-library/react";
import StreamFilter from ".";
import defaultData from "./defaultData";

describe("StreamFilter", () => {
  it("should match the snapshot", () => {
    expect(
      render(<StreamFilter {...defaultData} />).container.firstChild
    ).toMatchSnapshot();
  });

  it("should not have input value if no word prop is passed", () => {
    const { getByTestId } = render(<StreamFilter {...defaultData} />);

    expect((getByTestId("streamInput") as HTMLInputElement).value).toBe("");
  });

  it("should get the correct input value when a word prop is passed", () => {
    const { getByTestId } = render(
      <StreamFilter {...defaultData} word="birds" />
    );

    expect((getByTestId("streamInput") as HTMLInputElement).value).toBe(
      "birds"
    );
  });
});

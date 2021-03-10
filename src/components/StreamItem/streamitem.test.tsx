import * as React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import StreamItem from ".";
import defaultData from "./defaultData";

describe("StreamItem", () => {
  it("should match the snapshot", () => {
    expect(
      render(<StreamItem {...defaultData} />).container.firstChild
    ).toMatchSnapshot();
  });

  it("should call search on tag click", async () => {
    const onChangeHandler = jest.fn();

    const { queryAllByTestId } = render(
      <StreamItem {...defaultData} onSearch={onChangeHandler} />);

    await act(async () => {
      fireEvent.click(queryAllByTestId("searchTag")[0]);
      expect(onChangeHandler).toHaveBeenCalled();
    });
  });
});


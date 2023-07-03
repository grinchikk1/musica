import React from "react";
import renderer from "react-test-renderer";
import { screen, render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  // snapshot test
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Button backgroundColor="goldenrod" text="Buy Now" onClick={() => {}} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // unit test
  it("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    render(
      <Button text="Click me" onClick={onClickMock} />
    );
    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
